<template>
  <div class="account">
    <div class="heading-1">My FasterPay Accounts</div>
    <div class="sub-heading">
      <img src="@/assets/images/warn.svg" />
      <span>
        Insufficient balance. To continue, load your account instead to pay
      </span>
    </div>
    <div class="card-list account-card-list">
      <Card :active="!isDirect" @click="togglePaymentType">
        <div class="account-card">
          <div class="line-1">
            <img src="@/assets/images/eu.svg" /> <span>EUR</span>
          </div>
          <div class="line-2">€{{ $filters.toCurrency(balance) }}</div>
        </div>
      </Card>
    </div>
    <div class="heading-4">Bank transfers</div>
    <div class="card-list">
      <Card
        title="Überweisung"
        :active="paymentBy === PAYMENT_BY.FASTER_PAY"
        @click="setPaymentBy(PAYMENT_BY.FASTER_PAY)"
      >
        <div class="logo-card">
          <img src="@/assets/images/fastpay.png" />
        </div>
      </Card>
      <Card
        title="Ideal"
        :active="paymentBy === PAYMENT_BY.IDEAL"
        @click="setPaymentBy(PAYMENT_BY.IDEAL)"
      >
        <div class="logo-card">
          <img src="@/assets/images/ideal.png" />
        </div>
      </Card>
      <Card
        title="Giropay"
        :active="paymentBy === PAYMENT_BY.GIRO_PAY"
        @click="setPaymentBy(PAYMENT_BY.GIRO_PAY)"
      >
        <div class="logo-card">
          <img src="@/assets/images/giropay.png" />
        </div>
      </Card>
      <Card
        title="Webmoney"
        :active="paymentBy === PAYMENT_BY.WEB_MONEY"
        @click="setPaymentBy(PAYMENT_BY.WEB_MONEY)"
      >
        <div class="logo-card">
          <img src="@/assets/images/webmoney.png" />
        </div>
      </Card>
    </div>
    <div class="heading-4">E-wallets</div>
    <div class="card-list">
      <Card
        title="AliPay"
        :active="paymentBy === PAYMENT_BY.ALIPAY"
        @click="setPaymentBy(PAYMENT_BY.ALIPAY)"
      >
        <div class="logo-card">
          <img src="@/assets/images/alipay.png" />
        </div>
      </Card>
      <Card
        title="Wechat Pay"
        :active="paymentBy === PAYMENT_BY.WECHAT_PAY"
        @click="setPaymentBy(PAYMENT_BY.WECHAT_PAY)"
      >
        <div class="logo-card">
          <img src="@/assets/images/wechat.png" />
        </div>
      </Card>
      <Card
        title="PayPal"
        :active="paymentBy === PAYMENT_BY.PAYPAL"
        @click="setPaymentBy(PAYMENT_BY.PAYPAL)"
      >
        <div class="logo-card">
          <img src="@/assets/images/paypal.png" />
        </div>
      </Card>
    </div>
    <div class="place-order" v-if="isDirect">
      <button class="btn-primary btn-big" :disabled="!paymentBy">
        <img src="@/assets/images/lock.svg" />
        Pay {{ $filters.toCurrency(totalOrderAmount) }} {{ currency }}
      </button>
      <div class="policy-term paragrah">
        By paying you agree to FasterPay’s <a href="#">Terms of Service</a> and
        <a href="#">Privacy Policy</a>.
      </div>
    </div>
    <div class="top-up" v-else>
      <button class="btn-primary btn-big">Top Up Account</button>
    </div>
  </div>
</template>

<script>
import { PAYMENT_TYPE, PAYMENT_BY } from "@/constants";
export default {
  computed: {
    balance() {
      return this.$store.getters.balance;
    },
    paymentType() {
      return this.$store.getters["payment/paymentType"];
    },
    paymentBy() {
      return this.$store.getters["payment/paymentBy"];
    },
    isDirect() {
      return this.paymentType === PAYMENT_TYPE.DIRECT;
    },
    totalOrderAmount() {
      return this.$store.getters["order/totalOrderAmount"];
    },
    currency() {
      return this.$store.getters["order/currency"];
    },
  },
  data() {
    return {
      PAYMENT_BY,
    };
  },
  methods: {
    togglePaymentType() {
      this.$store.dispatch("payment/togglePaymentType");
    },
    setPaymentBy(by) {
      this.$store.dispatch("payment/setPaymentBy", by);
    },
  },
};
</script>

<style lang="scss" scoped>
.account .sub-heading {
  align-items: center;
  display: flex;
  line-height: 19px;
  gap: 5px;
}

.account-card-list {
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
}

.btn-big {
  width: 340px;
  height: 48px;
  line-height: 48px;
  font-weight: var(--fw-bold);
  text-align: center;
  font-size: var(--heading-3);
}
.policy-form {
  width: 340px;
}
</style>