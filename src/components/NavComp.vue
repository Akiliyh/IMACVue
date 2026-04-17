<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import HomeIcon from '@/assets/img/home.svg'
import CrownIcon from '@/assets/img/crown.svg'

</script>

<template>
  <nav>
    <RouterLink to="/" class="tab">
      <!-- home icon -->
      <HomeIcon></HomeIcon>
      <span>Lexikr</span>
    </RouterLink>
    <RouterLink to="/game">
      <span>Play</span>
    </RouterLink>
    <RouterLink to="/records" class="tab">
      <!-- crown -->
      <CrownIcon></CrownIcon>
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
