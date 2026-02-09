<script setup>
const props = defineProps({
  imgUrl: { type: String, required: true },
  name: { type: String, required: true },
})
</script>

<template>
  <h1>{{ name }}</h1>
  <img v-bind:src="imgUrl" alt="" />
</template>

<style scoped></style>
