<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isHome = computed(() => route.path === '/')
const isGame = computed(() => route.path === '/game')
</script>

<template>
  <nav>
    <RouterLink to="/" class="home">
      <!-- home icon -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
        <path
          d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z" />
      </svg>
      <span>Lexikr</span>
    </RouterLink>
    <RouterLink to="/game">
      <span>Play</span>
    </RouterLink>
  </nav>
</template>

<style lang="scss">
nav {
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  padding: 5px 7px;
  border-radius: 50px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  svg {
    fill: $subtle-peach;
  }

  a {
    text-decoration: none;
    border-radius: 50px;
    padding: 5px 10px;
    color: black;
    transition: .5s ease;

    &:hover {
      background-color: #f7f7f7;
    }

    &.router-link-active {
      background-color: #f1f1f1;
    }

    span {
      font-size: 1rem;
      font-weight: 500;
    }
  }
}

.home {
  display: flex;
  gap: 5px;
  align-items: center;
}
</style>
