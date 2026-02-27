<script setup>
import 'primeicons/primeicons.css'
</script>

<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
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

body {
  background-color: $subtle-white;
}
</style>
