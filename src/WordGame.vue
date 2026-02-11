<script setup>
import { ref, onMounted } from 'vue'
import { getWordData, getRelatedWordsData, getWordsData } from '@/api/wordAPI'

import { useRouter } from 'vue-router'

const router = useRouter()
router.push('/about')

const firstWord = ref('')
const destWord = ref('')

const relatedWords = ref({ results: [] })

const words = ref({ results: [] })

function flattenRelatedWords(data) {
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
</script>

<template>
  <h1>OHHH</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <ul>
    <li v-for="word in words" :key="word.id">
      {{ word.word }}
    </li>
  </ul>

  <p>
    {{ firstWord.word }}
  </p>

  <p>
    {{ destWord.word }}
  </p>

  <li v-for="word in relatedWords" :key="word.id">
    {{ word.word }}
  </li>
</template>

<style scoped></style>
