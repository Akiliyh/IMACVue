<script setup>
import { ref, onMounted } from 'vue'
import { getWordData, getRelatedWordsData, getWordsData } from '@/api/wordAPI'

import { useRouter } from 'vue-router'

const router = useRouter()
router.push('/about')

const word = ref('')

const relatedWords = ref({ results: [] })

const words = ref({ results: [] })

onMounted(async () => {
  const data = await getWordData()
  word.value = data
  console.log(data.word)

  const wordsData = await getWordsData()
  words.value = wordsData.results
  console.log(wordsData.word)

  const relatedData = await getRelatedWordsData(data.word)
  relatedWords.value = relatedData
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
    {{ word.word }}
  </p>

  <li v-for="word in relatedWords" :key="word.id">
    {{ word.word }}
  </li>
</template>

<style scoped></style>
