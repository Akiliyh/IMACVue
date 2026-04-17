<script setup>
import CrownIcon from '@/assets/img/crown.svg'

const pb = JSON.parse(localStorage.getItem('lexikr-pb'))

</script>

<template>
  <div class="home">
    <h1>Explore a new world of wordgaming!</h1>
    <p>
      From one word to another etc find like Wikirace!
    </p>

    <div class="content">

      <button>
        <a href="/game">Play now!</a>
      </button>

      <div v-if="pb">
        <span>Your personal record:</span>
        <div class="pb-section">
          <!-- crown -->
          <CrownIcon></CrownIcon>

          <span class="info">steps:</span>
          <span>{{ pb.guessedWords }}</span>
          <span class="info">date:</span>
          <span>{{ new Date(pb.finishedAt).toLocaleDateString() }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 50px); // we remove the size of the navbar

  .info {
    font-size: .8rem;
  }
}

button {
  font-size: 1.8rem;
  cursor: pointer;
  background-color: $subtle-peach;
  border-radius: 50px;
  padding: 5px 20px;
  border: none;
  transition: .1s ease-out;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: $subtle-orange;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: black;
  }
}

.content {
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  gap: 50px;
}

.pb-section {
  padding: 5px 10px;
  background-color: $subtle-azur;
  margin: 20px;
  border-radius: 50px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 5px;
  align-items: center;
}
</style>
