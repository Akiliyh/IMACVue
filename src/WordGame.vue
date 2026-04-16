<script setup>
import { ref, onMounted, computed } from 'vue'
import {
  useMediaQuery
} from '@vueuse/core'

import {
  getWordData,
  getRelatedWordsData,
  getWordsData,
  getWordDefinitionData,
} from '@/api/wordAPI'
import WordCard from '@/components/WordCard.vue'
import WordDefinition from '@/components/WordDefinition.vue' // change name later
import DropdownButton from '@/components/DropdownButton.vue'
import CongratsComp from '@/components/CongratsComp.vue'

import { useRouter } from 'vue-router'

const isMobileScreen = useMediaQuery('(max-width: 768px)')

const router = useRouter()
router.push('/game')

const firstWord = ref('')
const destWord = ref('')

const relatedWords = ref([])
const words = ref([])

const guessedWords = ref([])

const inputField = ref('')

const filters = ref({
  rhyme: false,
  antonym: false,
  synonym: false,
  hyponym: false,
  hypernym: false,
  'same-context': false,
  'etymologically-related-term': false,
  'cross-reference': false,
  'verb-stem': false,
  form: false,
  variant: false,
  equivalent: false,
})

function restartGame() {
  destWord.value = ""
  firstWord.value = ""
  filteredWords.value.splice(0)
  guessedWords.value.splice(0)
  initGame()
}

function flattenRelatedWords(data) {
  // here we want to get the word and its type at the same level
  let newData = data.flatMap((group) =>
    group.words.map((word) => ({
      word: word,
      type: group.relationshipType,
    })),
  )

  console.log(newData)
  const seen = new Set()

  newData = newData.filter((obj) => {
    if (!/^[a-z]+$/.test(obj.word)) return false // we onky keep minuscules and remove phrases

    if (seen.has(obj.word)) return false // we remove duplicates

    seen.add(obj.word)
    return true
  })

  console.log(newData)

  return newData.sort(() => Math.random() - 0.5)
}

const switchWord = async (word) => {
  inputField.value = ''
  guessedWords.value.push(word)
  relatedWords.value = []
  const relatedData = await getRelatedWordsData(word)
  relatedWords.value = flattenRelatedWords(relatedData)
}

const initGame = async (word) => {

  const firstData = await getWordData()
  firstWord.value = firstData
  guessedWords.value.push(firstData.word)
  // firstWord.value = { word: 'accompanying', id: 0 }
  // firstData.word = 'accompanying'
  console.log(firstData.firstWord)

  const firstDefinitionData = await getWordDefinitionData(firstData.word)
  console.log(firstDefinitionData)

  const destData = await getWordData()
  destWord.value = destData
  console.log(destData.destWord)

  const wordsData = await getWordsData()
  words.value = wordsData.results
  console.log(wordsData.results)

  const relatedData = await getRelatedWordsData(firstData.word)
  relatedWords.value = flattenRelatedWords(relatedData)
}

onMounted(async () => {
  initGame();
})

// we deal with the filtering here

const toggleFilter = (key) => {
  filters.value[key] = !filters.value[key]
}

const filteredWords = computed(() => {
  const inputFiltered = relatedWords.value.filter((word) => {
    if (inputField.value == '') return true
    else return word.word.toLowerCase().includes(inputField.value.toLowerCase())
  })

  const tagFiltered = inputFiltered.filter((word) => {
    const entries = Object.entries(filters.value)
    const hasActiveFilter = entries.some(([key, value]) => value)
    const matchesActiveFilter = entries.some(([key, value]) => value && word.type === key)

    if (!hasActiveFilter) return true // if no filter we display all
    return matchesActiveFilter
  })

  console.log(tagFiltered)

  return tagFiltered;
})

const checkGameOver = computed(() => {
  return guessedWords.value[guessedWords.value.length - 1] === destWord.value.word
})


</script>

<template>
  <div class="info">
    <div>
      <h1>Lexikr</h1>

      <div class="filtering">
        <input type="text" v-model="inputField" />
        <DropdownButton :filters="filters" :toggleFilter="toggleFilter"></DropdownButton>
      </div>

      <div class="wanted-words">
        <div>
          <i v-if="!firstWord.word" class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
          <WordDefinition v-else :word="firstWord.word"></WordDefinition>
        </div>

        <div>
          <i v-if="!destWord.word" class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
          <WordDefinition v-else :word="destWord.word"></WordDefinition>
        </div>
      </div>
    </div>
    <div v-if="!isMobileScreen"
      style="display: flex; flex-direction: column; gap: 10px; width: 95%; margin-left: auto; margin-right: auto;">
      <span style="font-size: .8rem;">Guessed words:</span>
      <div class="guessed-words">
        <template v-for="(guessedWord, index) in guessedWords" :key="guessedWord.indexOf">
          <template v-if="index > 0">
            <p>—</p>
          </template>
          <p>{{ guessedWord }}</p>
        </template>
      </div>
    </div>
    <div v-else
      style="display: flex; flex-direction: column; gap: 10px; width: 95%; margin-left: auto; margin-right: auto;">
      <span style="font-size: .8rem;">Last guessed word:</span>
      <div class="guessed-words">
        <p>{{ guessedWords[guessedWords.length - 1] }}</p>
      </div>
    </div>
  </div>

  <div class="words" v-if="!checkGameOver">
    <i v-if="relatedWords.length == 0" class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    <WordCard v-else v-for="word in filteredWords" :key="word.id" :word="word.word" :type="word.type"
      :switchWord="switchWord"></WordCard>
  </div>

  <CongratsComp :isGameOver="guessedWords.length > 0 && checkGameOver" :guessedWords="guessedWords"
    :restartGame="restartGame">
  </CongratsComp>
</template>

<style scoped lang="scss">
i.pi-spin {
  width: fit-content;
  height: fit-content;
  color: $subtle-peach;

  .words & {
    font-size: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
  }
}

.wanted-words {
  margin: 10px;
}

.info {
  z-index: 1;
  position: sticky;
  top: 10px;
  background: white;
  padding: 10px;
  border-radius: 10px;
  width: auto;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  box-shadow: 0 3px 10px #0202630d;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    column-gap: 50px;

    &.filtering {
      gap: 20px;
      height: fit-content;

      input {
        border-radius: 10px;
        height: 100%;
        border: 2px $subtle-aubergine solid;
        padding: 2px 5px;

        &:focus-visible {
          outline: 3px solid $subtle-orange;
        }

      }
    }
  }
}

.guessed-words {
  display: flex;
  gap: 10px;

  p {
    width: fit-content;
    margin: 0;
  }
}

.words {
  display: flex;
  width: auto;
  flex-wrap: wrap;
  justify-content: initial;
  gap: 10px;
  overflow: scroll;
  margin: 0 10px;
  flex: 1;
}
</style>
