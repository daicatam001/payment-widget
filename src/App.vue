<template>
  <div class="app">
    <Header />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");

*,
*::after,
*::before {
  box-sizing: border-box;
}

:root {
  --ff: "Montserrat", sans-serif;

  --fs-base: 12px;

  --ss-bg: #111052;

  --fw-bold: 600;

  --clr-light: #fff;
  --clr-dark: #070c11;
  --color-accent: #2af5d6;

  --border-clr: #f2f7ff;
  --bs-frame: 0px 0px 24px rgba(8, 21, 30, 0.2);
  --bs-card: 0px 5px 12px rgba(57, 40, 71, 0.2);
  --radius-base: 4px;
}

.app {
  max-width: 931px;
  margin: 0 auto;
  box-shadow: var(--bs-frame);
}
</style>