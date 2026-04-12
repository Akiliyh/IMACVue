<script setup>
import { ref, onMounted, computed } from 'vue'
import { getWordDefinitionData } from '@/api/wordAPI'

const props = defineProps({
  word: { type: String, required: true },
})

const definition = ref('')
const type = ref('')
const isModalOpen = ref(false)

const fetchDefinition = async () => {
  const wordDefinitionData = await getWordDefinitionData(props.word)
  definition.value = wordDefinitionData[0].text
  type.value = wordDefinitionData[0].partOfSpeech
}

const toggleModal = async () => {
  if (definition.value == '') {
    fetchDefinition()
  }
  isModalOpen.value = !isModalOpen.value
}
</script>

<template>
  <div @click="toggleModal()" class="definition">
    <p>{{ word }}</p>
    <i class="pi pi-question" style="font-size: 0.5rem"></i>
  </div>


  <!-- we want to teleport to body so it takes fs -->
  <Teleport to="body">
    <Transition>
      <dialog class="dialog" v-if="isModalOpen" open id="word-def-dialog">
        <i v-if="!definition" class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
        <div v-html="definition"></div>
        <span>{{ type }}</span>
        <button @click="toggleModal()">Close</button>
      </dialog>
    </Transition>
    <Transition>
      <div @click="toggleModal()" v-if="isModalOpen" class="fallback-background"></div>
    </Transition>

  </Teleport>
</template>

<style lang="scss">
.dialog {
  z-index: 2;
  position: fixed;
  top: 100px;
  border-radius: 5px;
  border: 1px solid grey;
  display: flex;
  gap: 10px;
  max-width: 80vw;

  button {
    cursor: pointer;
  }

  &.v-enter-active,
  &.v-leave-active {
    transition: 0.5s ease;
  }

  &.v-enter-from,
  &.v-leave-to {
    transform: translateY(50px);
    opacity: 0;
  }
}

.definition {
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.5s ease;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: rgb(241, 240, 240);

    & i {
      opacity: 100%;
    }
  }

  i {
    opacity: 0%;
    transition: ease .2s;
  }

  p {
    margin: 0;
  }
}

.fallback-background {
  cursor: pointer;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.06);

  &.v-enter-active,
  &.v-leave-active {
    transition: opacity 0.5s ease;
  }

  &.v-enter-from,
  &.v-leave-to {
    opacity: 0;
  }
}
</style>
