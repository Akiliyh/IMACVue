<script setup>
const props = defineProps({
  url: { type: String, required: true },
  text: { type: String, default: 'ahah', required: true },
})
console.log(props.text)
</script>

<template>
  <h1>{{ text }}</h1>
  <h1 v-if="text === 'ahah'">Vue is awesome!</h1>
</template>

<style scoped></style>
