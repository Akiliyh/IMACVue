<script setup>
import CrownIcon from '@/assets/img/crown.svg'

const records = JSON.parse(localStorage.getItem('lexikr-records'))
const pb = JSON.parse(localStorage.getItem('lexikr-pb'))

</script>

<template>
  <div class="home">
    <h1>Consult your best scores while lexikring</h1>
    <p>
      You are ranked 7985 out of 1,526,352 players today!
      <!-- fake it until you make it -->
    </p>

    <div class="record-section">

      <div class="record-content pb">
        <!-- crown -->
        <CrownIcon></CrownIcon>
        <span class="info">steps:</span>
        <span>{{ pb.guessedWords }}</span>
        <span class="info">first word:</span>
        <span>{{ pb.firstWord }}</span>
        <span class="info">destination:</span>
        <span>{{ pb.destWord }}</span>
        <span class="info">date:</span>
        <span>{{ new Date(pb.finishedAt).toLocaleDateString() }}</span>
      </div>

      <div v-for="(record, index) in records" :key="index" class="record-content">
        <span class="info">steps:</span>
        <span>{{ record.guessedWords }}</span>
        <span class="info">first word:</span>
        <span>{{ record.firstWord }}</span>
        <span class="info">destination:</span>
        <span>{{ record.destWord }}</span>
        <span class="info">date:</span>
        <span>{{ new Date(record.finishedAt).toLocaleDateString() }}</span>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.home {
  width: 95%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;

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

.record-section {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}

.record-content {
  padding: 5px 10px;
  background-color: $subtle-azur;
  margin: 20px;
  border-radius: 50px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  gap: 5px;
  align-items: center;
  grid-template-columns: 0.1fr repeat(8, 1fr);
  justify-content: space-around;
  max-width: 800px;

  &:not(.pb) {
    width: 90%;
    max-width: 700px;
    grid-template-columns: repeat(8, 1fr);
  }

  svg {
    margin-left: auto;
    margin-right: auto;
  }

  &.pb {
    background-color: $subtle-peach;
  }
}

@media (max-width: 768px) {
  .info {
    display: none;
  }

  .record-content {
    grid-template-columns: 0.1fr 0.1fr repeat(3, 1fr);

    &:not(.pb) {
      grid-template-columns: 0.1fr repeat(3, 1fr);
    }
  }
}
</style>
