<script setup>
import 'primeicons/primeicons.css'

import FooterComp from '@/components/FooterComp.vue'
</script>

<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/game">Play</RouterLink>
  </nav>
  <main>
    <RouterView />
    <FooterComp></FooterComp>
  </main>
</template>

<style lang="scss">
@font-face {
  font-family: Clash_Display;
  src: url('@/assets/fonts/ClashDisplay-Variable.woff2') format('woff2');
}

* {
  font-family: Clash_Display;
}

#app {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  background-color: $subtle-white;
  margin: 0;
  box-sizing: border-box;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

html,
body {
  height: 100%;
}
</style>
