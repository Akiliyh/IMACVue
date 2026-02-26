<script setup>
const props = defineProps({
  word: { type: String, required: true },
  type: { type: String, default: 'synonym', required: true },
  switchWord: { type: Function, required: true },
})
</script>

<template>
  <div class="word" @click="switchWord(word)">
    <h1>{{ word }}</h1>
    <p>{{ type }}</p>
  </div>
</template>

<style scoped>
.word {
  background-color: aqua;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: fit-content;
}
</style>
