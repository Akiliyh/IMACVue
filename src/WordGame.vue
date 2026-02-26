<script setup>
import { ref, onMounted, computed } from 'vue'
import { getWordData, getRelatedWordsData, getWordsData } from '@/api/wordAPI'
import WordCard from '@/components/WordCard.vue'

import { useRouter } from 'vue-router'

const router = useRouter()
router.push('/about')

const firstWord = ref('')
const destWord = ref('')

const relatedWords = ref([])
const words = ref([])

const guessedWords = ref([])

const inputField = ref('')

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
  return newData
}

const switchWord = async (word) => {
  guessedWords.value.push(word)
  relatedWords.value = []
  console.log(word)
  const relatedData = await getRelatedWordsData(word)
  relatedWords.value = flattenRelatedWords(relatedData)
}

onMounted(async () => {
  const firstData = await getWordData()
  firstWord.value = firstData
  // firstWord.value = { word: 'accompanying', id: 0 }
  // firstData.word = 'accompanying'
  console.log(firstData.firstWord)

  const destData = await getWordData()
  destWord.value = destData
  console.log(destData.destWord)

  const wordsData = await getWordsData()
  words.value = wordsData.results
  console.log(wordsData.results)

  const relatedData = await getRelatedWordsData(firstData.word)
  relatedWords.value = flattenRelatedWords(relatedData)
})

// we deal with the filtering here

const filteredWords = computed(() => {
  const filtered = relatedWords.value.filter((word) => {
    if (inputField.value == '') return true
    return word.word.toLowerCase().includes(inputField.value.toLowerCase())
  })

  return filtered.sort(() => Math.random() - 0.5)
})
</script>

<template>
  <h1>Cnon</h1>

  <div>
    <input type="text" v-model="inputField" />
  </div>

  <div>
    <i v-if="!firstWord.word" class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    <p v-else>{{ firstWord.word }}</p>
  </div>

  <div>
    <i v-if="!destWord.word" class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    <p v-else>{{ destWord.word }}</p>
  </div>

  <div class="guessed-words">
    <template v-for="(guessedWord, index) in guessedWords" :key="guessedWord.indexOf">
      <template v-if="index > 0">
        <p>—</p>
      </template>
      <p>{{ guessedWord }}</p>
    </template>
  </div>

  <div class="words">
    <i v-if="filteredWords.length == 0" class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    <WordCard
      v-else
      v-for="word in filteredWords"
      :key="word.id"
      :word="word.word"
      :type="word.type"
      :switchWord="switchWord"
    ></WordCard>
  </div>
</template>

<style scoped>
.guessed-words {
  display: flex;
  gap: 10px;
}

.guessed-words p {
  width: fit-content;
}

.words {
  display: flex;
  width: auto;
  flex-wrap: wrap;
  justify-content: initial;
  align-content: flex-end;
  gap: 10px;
}
</style>
