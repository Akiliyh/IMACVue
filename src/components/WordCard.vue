<script setup>

import {
  useMediaQuery
} from '@vueuse/core'

const props = defineProps({
  word: { type: String, required: true },
  type: { type: String, default: 'synonym', required: true },
  switchWord: { type: Function, required: true },
})

const isMobileScreen = useMediaQuery('(max-width: 768px)')
</script>

<template>
  <div :class="'word ' + type + ' ' + (isMobileScreen ? ' mobile' : '')" @click="switchWord(word)" tabindex="0"
    v-on:keypress="switchWord(word)">
    <h1>{{ word }}</h1>
    <p>{{ type }}</p>
  </div>
</template>

<style lang="scss" scoped>
.word {
  background-color: $primary-color;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  border: 3px solid transparent;
  transition: border 0.3s ease-out;

  &.mobile {
    padding: 5px 15px;

    h1 {
      font-size: 1.3rem;
    }
  }

  &:hover,
  &:focus-visible {
    border: 3px solid $primary-color;
    outline: none;
  }

  &.hyponym {
    background-color: $subtle-azur;
  }

  &.synonym {
    background-color: $subtle-sanguine;
  }

  &.hypernym {
    background-color: $subtle-burgundy;
  }

  &.word.same-context {
    background-color: $subtle-green;
  }

  &.rhyme {
    background-color: $subtle-aubergine;
  }

  &.verb-stem {
    background-color: $subtle-orange;
  }

  &.antonym {
    background-color: $subtle-purple;
  }

  &.etymologically-related-term {
    background-color: $subtle-silver;
  }

  &.cross-reference {
    background-color: $subtle-pink;
  }

  &.equivalent {
    background-color: $subtle-mandarin;
  }

  &.verb-form {
    background-color: $subtle-peach;
  }

  &.variant {
    background-color: $subtle-cyan;
  }

  &.form {
    background-color: $subtle-yellow;
  }
}
</style>
