<template>
  <Header />
  <main id="main">
    <div class="payment-method">
      <PayTo />
      <Line />
      <Account v-if="step === STEP.ACCOUNT" />
      <TopUp v-else-if="step === STEP.TOP_UP" />
      <Success v-else-if="step === STEP.SUCCESS" />
    </div>
    <div class="order-wrapper">
      <Order />
      <Scan v-if="!isSuccess" />
    </div>
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import PayTo from "@/components/PayTo.vue";
import Order from "./components/Order.vue";
import Account from "./components/Account.vue";
import TopUp from "./components/TopUp.vue";
import Scan from "./components/Scan.vue";
import Success from "./components/Success.vue";
import { STEP } from "@/constants";
export default {
  components: {
    Header,
    Footer,
    PayTo,
    Order,
    Account,
    TopUp,
    Scan,
    Success,
  },
  computed: {
    isSuccess() {
      return this.step === STEP.SUCCESS;
    },
    step() {
      return this.$store.getters.step;
    },
  },
  data() {
    return {
      STEP: STEP,
    };
  },
};
</script>

<style lang="scss">

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: var(--ff);
}

button:not(:disabled) {
  cursor: pointer;
}

body {
  min-height: 100%;
  padding: 30px 0;
  min-width: 950px;
  font-size: var(--fs-base);
  overflow-y:overlay
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
  --clr-accent-lighter: #2af5d6;

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
  &:not(:disabled):hover {
    background-color: var(--clr-accent-light);
  }
  &:disabled {
    background-color: var(--clr-accent-lighter);
    color: var(--clr-gray);
  }
}
.order-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.heading-1 {
  font-size: var(--heading-1);
  font-weight: var(--fw-bold);
  margin-bottom: 10px;
}
.heading-2 {
  font-size: var(--heading-2);
  font-weight: var(--fw-bold);
}
.heading-3 {
  font-size: var(--heading-3);
  font-weight: var(--fw-bold);
}
.heading-4 {
  font-size: var(--heading-4);
  font-weight: var(--fw-bold);
}

.sub-heading {
  font-size: var(--heading-5);
  font-weight: var(--fw-medium);
  color: var(--clr-gray);
}

.card-list {
  margin: 15px 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
}

.paragrah {
  width: 340px;
  line-height: 20px;
  margin-top: 10px;
  font-size: var(--heading-5);
  color: var(--clr-dark);
  a {
    color: inherit;
  }
}

.btn-big {
  width: 340px;
  height: 48px;
  line-height: 48px;
  font-weight: var(--fw-bold);
  text-align: center;
  font-size: var(--heading-3);
}

.back-link {
  color: var(--blue-500);
  font-size: var(--heading-5);
  font-weight: var(--fw-bold);
  cursor: pointer;
}
</style>