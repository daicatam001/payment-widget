<template>
  <div class="success">
    <div class="success-noti-wrapper">
      <img src="@/assets/images/checkbox.svg" alt="" />
      <div class="heading-1">Transaction successful</div>
      <div class="transaction-info">
        <div class="row">
          <div class="label">Transaction ID</div>
          <div class="value">1029453384</div>
        </div>
        <Line />
        <div class="row">
          <div class="label">Account Balance</div>
          <div class="value">198.75 EUR</div>
        </div>
      </div>
      <div class="action">
        <button class="btn-primary btn-download">Download receipt</button>
        <div class="back back-link" @click="toMerchant">Back to merchant</div>
        <div class="paragrah">
          Any questions? Please contact our <a href="#">Support Center</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { STEP } from "@/constants";
export default {
  methods: {
    toMerchant() {
      this.$store.dispatch("setStep", STEP.ACCOUNT);
    },
  },
};
</script>

<style lang="scss" scoped>
.success {
  display: flex;
  align-items: center;
  justify-content: center;
}
.success-noti-wrapper {
  text-align: center;
  width: 350px;
}
.heading-1 {
  margin: 20px 0 30px;
}
.row {
  display: flex;
  justify-content: space-between;
  .label {
    color: #455a64;
  }
}
.transaction-info {
  margin-bottom: 20px;
  .line {
    opacity: 1;
    margin: 15px 0;
    background-color: var(--clr-dark);
  }
}
.btn-download {
  height: 48px;
  line-height: 48px;
  font-weight: var(--fw-bold);
  text-align: center;
  width: 80%;
  margin: 0 auto;
  font-size: var(--heading-3);
}
.back-link {
  margin-top: 20px;
}

.paragrah {
  margin-top: 50px;
}
</style>