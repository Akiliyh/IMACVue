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

<style lang="scss">
.word {
  background-color: $primary-color;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: fit-content;

  &.hyponym {
    background-color: blanchedalmond;
  }

  &.synonym {
    background-color: blueviolet;
  }

  &.hypernym {
    background-color: silver;
  }

  &.word.same-context {
    background-color: azure;
  }

  &.rhyme {
    background-color: burlywood;
  }

  &.verb-stem {
    background-color: khaki;
  }

  &.antonym {
    background-color: floralwhite;
  }

  &.etymologically-related-term {
    background-color: salmon;
  }

  &.cross-reference {
    background-color: aquamarine;
  }

  &.equivalent {
    background-color: mistyrose;
  }

  &.verb-form {
    background-color: mediumturquoise;
  }

  &.variant {
    background-color: ivory;
  }

  &.form {
    background-color: aliceblue;
  }
}
</style>
