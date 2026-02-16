<script setup>
const props = defineProps({
  word: { type: String, required: true },
  type: { type: String, default: 'synonym', required: true },
})
</script>

<template>
  <div class="word" @click="console.log(word)">
    <h1>{{ word }}</h1>
    <p>{{ type }}</p>
  </div>
</template>

<style scoped>
.word {
  background-color: aqua;
  padding: 10px;
  border-radius: 10px;
}
</style>
