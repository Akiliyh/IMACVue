<script setup>
import { ref, onMounted } from 'vue'
import { getFilmData } from '@/api/wordAPI'
import FilmCard from './components/FilmCard.vue'

const films = ref({ results: [] })

onMounted(async () => {
  const data = await getFilmData()
  films.value = data
  console.log(data.results)
})
</script>

<template>
  <h1>AAHHH</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <ul>
    <FilmCard
      v-for="film in films.results"
      :key="film.id"
      :name="film.name"
      :img-url="'https://image.tmdb.org/t/p/w780' + film.backdrop_path"
    >
      {{ film.name }}
    </FilmCard>
  </ul>
</template>

<style scoped></style>
