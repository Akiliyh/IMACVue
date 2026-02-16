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

const filteredWords = computed(() =>
  relatedWords.value.filter((word) => {
    if (inputField.value == '') return true
    return word.word.toLowerCase().indexOf(inputField.value.toLowerCase()) >= 0
  }),
)
</script>

<template>
  <h1>Cnon</h1>

  <div>
    <input type="text" v-model="inputField" />
  </div>

  <p>
    {{ firstWord.word }}
  </p>

  <p>
    {{ destWord.word }}
  </p>

  <WordCard
    v-for="word in filteredWords"
    :key="word.id"
    :word="word.word"
    :type="word.type"
  ></WordCard>
</template>

<style scoped></style>
