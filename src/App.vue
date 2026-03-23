<script setup>
import 'primeicons/primeicons.css'
</script>

<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/game">Play</RouterLink>
  </nav>
  <main>
    <RouterView />
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
}

body {
  background-color: $subtle-white;
}
</style>
