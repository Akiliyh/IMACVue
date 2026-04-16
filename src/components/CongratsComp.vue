<script setup>
import FireworksComp from '@/components/FireworksComp.vue'

const props = defineProps({
  isGameOver: { type: Boolean, required: true },
  guessedWords: { type: Array, required: true },
  restartGame: { type: Function, required: true },
})
</script>

<template>
  <Transition>
    <dialog class="congrats-dialog" v-if="isGameOver" open id="congrats-dialog">
      <div>
        <h1>Congrats!</h1>
        <div class="guessed-words">
          <template v-for="(guessedWord, index) in guessedWords" :key="guessedWord.indexOf">
            <template v-if="index > 0">
              <p>—</p>
            </template>
            <p>{{ guessedWord }}</p>
          </template>
        </div>
        <div class="info">
          <div>
            <span>You found in</span>
            <span class="tries">{{ guessedWords.length }}</span>
            <span>{{ guessedWords.length === 1 ? "move!" : "moves!" }} </span>
          </div>
          <span>Damn you know words!</span>
        </div>
        <div class="buttons">
          <button @click="restartGame()">Restart Game</button>
          <a href="/"><button>Home</button></a>

          <button>Share</button>
          <!-- fake it until you make it -->
        </div>

      </div>
    </dialog>
  </Transition>

  <Transition>
    <div v-if="isGameOver" class="congrats-fallback-background"></div>
  </Transition>

  <FireworksComp v-if="isGameOver"></FireworksComp>
</template>

<style lang="scss">
.congrats-dialog {
  z-index: 2;
  position: fixed;
  top: 100px;
  border-radius: 5px;
  border: 0;
  display: flex;
  gap: 10px;
  max-width: 80vw;
  padding: 50px;
  min-width: 20vw;
  justify-content: center;
  border-radius: 10px;

  &>div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  & .info {
    display: flex;
    flex-direction: column;

    .tries {
      padding: 5px 10px;
      background-color: $subtle-yellow;
      border-radius: 5px;
      transform: rotate(10deg);
    }

    div {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }

  & .buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    button {
      border-radius: 10px;
      border: 0;
      padding: 5px 10px;
      font-weight: 500;
      font-size: 1rem;
      cursor: pointer;
      transition: .2s ease;
    }

    :first-child {
      background-color: $subtle-peach;

      &:hover {
        background-color: $subtle-burgundy;
        // color: white;
      }
    }

    :last-child {
      background-color: $subtle-azur;

      &:hover {
        background-color: $subtle-orange;
        // color: white;
      }
    }
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

.guessed-words {
  display: flex;
  gap: 10px;
}

.congrats-fallback-background {
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
