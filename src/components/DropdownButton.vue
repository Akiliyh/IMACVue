<script setup>
import { ref, computed } from "vue"

const props = defineProps({
  filters: { type: Object, required: true },
  toggleFilter: { type: Function, required: true },
})

const isOpen = ref(false)
const search = ref("")

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

const filteredItems = computed(() => {
  return Object.entries(props.filters).filter(item =>
    item.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <div class="dropdown">
    <div class="dropbtn" @click="toggleDropdown">
      <span>Filters</span>

      <i v-if="isOpen" class="pi pi-chevron-down" style="font-size: 1rem"></i>
      <i v-else class="pi pi-chevron-up" style="font-size: 1rem"></i>
    </div>

    <div v-if="isOpen" class="dropdown-content">

      <div class="item" v-for="item in Object.entries(props.filters)" :key="item" @click="toggleFilter(item[0])">
        <input type="checkbox" :checked="item[1]" name="" id="">
        <span>
          {{ item[0].charAt(0).toUpperCase() + item[0].slice(1) }}
          <!-- for capitalization -->
          <!-- name -->
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dropbtn {
  background-color: $primary-color;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.dropbtn:hover {
  background-color: #3e8e41;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  background-color: white;
  min-width: 100px;
  border: 1px solid #ddd;
  z-index: 1;
  display: flex;
  flex-direction: column;
  top: 70px;
  padding: 5px;
  gap: 5px;
  border-radius: 5px;
  max-height: 191px;
  overflow: scroll;

  .item {
    display: flex;
    padding: 12px 6px;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    gap: 10px;

    &:hover {
      background-color: #f1f1f1;
    }

    input {
      accent-color: $primary-color;
    }
  }
}
</style>
