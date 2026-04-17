<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-separation"></div>
    <div class="footer-info">
      <span>
        Guillaume B.
      </span>
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
}
</style>
