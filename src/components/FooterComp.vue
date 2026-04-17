<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-separation"></div>
    <div class="footer-info">
      <div class="first-col">
        <a href="/">Home</a>
        <a href="/play">Play</a>
        <a href="/records">Records</a>
      </div>
      <div class="second-col">
        <a href="/about">About</a>
        <a href="/faq">FAQ</a>
      </div>
      <div class="third-col">
        <a href="/terms">Terms & Condition</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: static;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  text-align: center;
  min-height: 100px;
}

.footer-separation {
  width: 100vw;
  height: 100px;
  background-color: $subtle-white;
  border-radius: 0 0 50px 50px;
}

.footer-info {
  min-height: 50px;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  row-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    div {
      flex-direction: row;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    border-top: 1px $subtle-silver solid;
    text-align: left;
    gap: 10px;

    a {
      color: rgb(21, 49, 74);
      text-decoration: none;
      transition: 0.1s font-weight;
      width: fit-content;

      @media (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
      }

      &:hover {
        color: rgb(11, 27, 41);
        font-weight: 500;
      }
    }
  }
}
</style>
