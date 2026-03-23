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
    <i class="pi pi-question" style="font-size: 0.8rem"></i>
  </div>
  <dialog v-if="isModalOpen" open id="word-def-dialog">
    {{ definition }}
    {{ type }}
    <button @click="toggleModal()">Close</button>
  </dialog>

  <!-- we want to teleport to body so it takes fs -->
  <Teleport to="body">
    <div @click="toggleModal()" v-if="isModalOpen" class="fallback-background"></div>
  </Teleport>
</template>

<style lang="scss">
.definition {
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.5s ease;
  padding: 5px;

  &:hover {
    background-color: rgb(241, 240, 240);
  }

  p {
    margin: 0;
  }
}

.fallback-background {
  cursor: pointer;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.06);
}
</style>
