<script setup>
const props = defineProps({
  word: { type: String, required: true },
  type: { type: String, default: 'synonym', required: true },
  switchWord: { type: Function, required: true },
})
</script>

<template>
  <div :class="'word ' + type" @click="switchWord(word)">
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

.word.hyponym {
  background-color: blanchedalmond;
}

.word.synonym {
  background-color: blueviolet;
}

.word.hypernym {
  background-color: silver;
}

.word.same-context {
  background-color: azure;
}

.word.rhyme {
  background-color: burlywood;
}

.word.verb-stem {
  background-color: khaki;
}

.word.antonym {
  background-color: floralwhite;
}

.word.etymologically-related-term {
  background-color: salmon;
}

.word.cross-reference {
  background-color: aquamarine;
}
</style>
