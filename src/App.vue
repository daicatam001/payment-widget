<template>
  <Header />
  <main id="main">
    <div class="payment-method">
      <PayTo />
      <Line />
      <Account />
    </div>
    <div class="order-wrapper">
      <Order />
      <Scan />
    </div>
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Line from "@/components/ui/Line.vue";
import PayTo from "@/components/PayTo.vue";
import Order from "./components/Order.vue";
import Account from "./components/Account.vue";
import Scan from "./components/Scan.vue";
export default {
  components: {
    Header,
    Footer,
    PayTo,
    Line,
    Order,
    Account,
    Scan,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  min-height: 100%;
  padding: 30px 0;
  font-family: var(--ff);
  font-size: var(--fs-base);
}

:root {
  --ff: "Montserrat", sans-serif;

  --fs-base: 14px;

  --fw-medium: 500;
  --fw-bold: 600;

  --clr-light: #fff;
  --clr-dark: #070c11;
  --clr-gray: #455a64;
  --clr-accent: #2af5d6;
  --clr-accent-light: #5fffe6;

  --border-clr: #f2f7ff;
  --bs-frame: 0px 0px 24px rgba(8, 21, 30, 0.2);
  --bs-card: 0px 5px 12px rgba(57, 40, 71, 0.2);
  --bs-card-active: 0px 5px 12px rgba(42, 245, 214, 0.4);
  --radius-base: 4px;
  --radius-frame: 8px;

  --blue-900: #111052;
  --blue-600: #1e41ff;
  --blue-500: #1169ff;
  --blue-300: #538fff;

  --heading-1: 21px;
  --heading-2: 20px;
  --heading-3: 16px;
  --heading-4: 14px;
  --heading-5: 12px;
}

#app {
  max-width: 930px;
  margin: 0 auto;
  height: 100%;
  box-shadow: var(--bs-frame);
  border-radius: var(--radius-frame);
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
}
main {
  display: grid;
  grid-template-columns: 1fr auto;
}
.payment-method,
.order-wrapper {
  padding: 20px;
}
.order-wrapper {
  width: 265px;
}

.btn-primary {
  background: var(--clr-accent);
  color: var(--clr-dark);
  outline: 0;
  border: 1px solid var(--clr-accent);
  border-radius: var(--radius-base);
  &:hover {
    background-color: var(--clr-accent-light);
  }
}
.order-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>