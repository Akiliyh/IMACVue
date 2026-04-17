<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isHome = computed(() => route.path === '/')
const isGame = computed(() => route.path === '/game')
</script>

<template>
  <nav>
    <RouterLink to="/" class="tab">
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
    <RouterLink to="/records" class="tab">
      <!-- crown -->
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.609 13.5616L21.8382 11.1263C22.0182 9.2137 22.1082 8.25739 21.781 7.86207C21.604 7.64823 21.3633 7.5172 21.106 7.4946C20.6303 7.45282 20.0329 8.1329 18.8381 9.49307C18.2202 10.1965 17.9113 10.5482 17.5666 10.6027C17.3757 10.6328 17.1811 10.6018 17.0047 10.5131C16.6865 10.3529 16.4743 9.91812 16.0499 9.04851L13.8131 4.46485C13.0112 2.82162 12.6102 2 12 2C11.3898 2 10.9888 2.82162 10.1869 4.46486L7.95007 9.04852C7.5257 9.91812 7.31351 10.3529 6.99526 10.5131C6.81892 10.6018 6.62434 10.6328 6.43337 10.6027C6.08872 10.5482 5.77977 10.1965 5.16187 9.49307C3.96708 8.1329 3.36968 7.45282 2.89399 7.4946C2.63666 7.5172 2.39598 7.64823 2.21899 7.86207C1.8918 8.25739 1.9818 9.2137 2.16181 11.1263L2.391 13.5616C2.76865 17.5742 2.95748 19.5805 4.14009 20.7902C5.32271 22 7.09517 22 10.6401 22H13.3599C16.9048 22 18.6773 22 19.8599 20.7902C21.0425 19.5805 21.2313 17.5742 21.609 13.5616Z"
          fill="#1C274C" />
      </svg>
      <span>Records</span>
    </RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
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

.tab {
  display: flex;
  gap: 5px;
  align-items: center;
}
</style>
