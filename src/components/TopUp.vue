<template>
  <div class="topup">
    <div class="back back-link" @click="backToAccount">
      <img src="@/assets/images/chevron-back.svg" />
      <span> Choose another payment method</span>
    </div>
    <div class="heading-1">Top up My FasterPay Account</div>
    <div class="choose-top-up-amount">
      <div class="head-num">
        <NumberBox :number="1" />
        <div class="head-text">
          <div class="heading-3">Choose top up amount</div>
          <div class="sub-heading">
            Can be higher than the payment order value
          </div>
        </div>
      </div>
      <div class="content">
        <Input
          label="Top Up amount"
          suffix="EUR"
          :value="topUpAmount"
          @onInput="setTopUpAmount"
        />
        <div class="badge-list">
          <AmountBadge
            currency="€"
            :amount="50"
            :active="topUpAmount == 50"
            @click="setTopUpAmount(50)"
          />
          <AmountBadge
            currency="€"
            :amount="100"
            :active="topUpAmount == 100"
            @click="setTopUpAmount(100)"
          />
          <AmountBadge
            currency="€"
            :amount="150"
            :active="topUpAmount == 150"
            @click="setTopUpAmount(150)"
          />
          <AmountBadge
            currency="€"
            :amount="200"
            :active="topUpAmount == 200"
            @click="setTopUpAmount(200)"
          />
        </div>
      </div>
    </div>

    <div class="choose-payment-method">
      <div class="head-num">
        <NumberBox :number="2" />
        <div class="head-text">
          <div class="heading-3">Choose payment method</div>
        </div>
      </div>
      <div class="content">
        <div class="heading-4">Instant payment methods</div>

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
        <div class="heading-4">Non-Instant payment methods</div>
        <div class="card-list">
          <Card
            title="Transfer from bank account"
            :active="paymentBy === PAYMENT_BY.BANK"
            @click="setPaymentBy(PAYMENT_BY.BANK)"
          >
            <div class="logo-card">
              <img src="@/assets/images/bank-transter.png" />
            </div>
          </Card>
        </div>
      </div>
    </div>
    <div class="top-up">
      <button
        class="btn-primary btn-big"
        @click="toPayment"
        :disabled="!topUpAmount || !paymentBy"
      >
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.1645 4.65012V6.78517H2.03999C1.25633 6.78517 0.619141 7.3356 0.619141 8.01255V14.7726C0.619141 15.4496 1.25633 16 2.03999 16H12.96C13.7437 16 14.3809 15.4496 14.3809 14.7726V8.00939C14.3809 7.33243 13.7437 6.78201 12.96 6.78201H12.9234V4.64696C12.9234 2.08465 10.5101 0 7.54394 0C4.57774 0.00316335 2.1645 2.08781 2.1645 4.65012ZM8.62099 11.7088C8.46711 11.8071 8.42607 11.901 8.42607 12.0574C8.4312 12.759 8.4312 13.4561 8.4312 14.1577C8.44659 14.4482 8.27732 14.7342 7.97981 14.8638C7.27708 15.1766 6.57434 14.7387 6.57434 14.1577V14.1533C6.57434 13.4517 6.57434 12.7501 6.57947 12.0484C6.57947 11.9054 6.54356 11.8116 6.39994 11.7178C5.67156 11.2485 5.43047 10.4486 5.79466 9.74701C6.1486 9.06328 7.01547 8.66109 7.83106 8.80409C8.73897 8.96496 9.36989 9.59954 9.38015 10.3905C9.38015 10.9402 9.12881 11.3871 8.62099 11.7088ZM7.50097 1.55068C5.60582 1.55068 4.06055 2.9236 4.06055 3.97963V5.67906H10.9414V3.97963C10.9414 2.92592 9.40029 1.55068 7.50097 1.55068Z"
            fill="currentColor"
          />
        </svg>
        {{ buttonLb }}
      </button>
    </div>
  </div>
</template>

<script>
import { PAYMENT_BY, STEP } from "@/constants";
export default {
  computed: {
    buttonLb() {
      return this.topUpAmount
        ? `Top Up ${this.$filters.toCurrency(this.topUpAmount)} ${
            this.currency
          }`
        : "Top Up";
    },
    topUpAmount() {
      return this.$store.getters["payment/topUpAmount"];
    },
    currency() {
      return this.$store.getters["order/currency"];
    },
    paymentBy() {
      return this.$store.getters["payment/paymentBy"];
    },
  },
  data() {
    return {
      PAYMENT_BY: PAYMENT_BY,
    };
  },
  methods: {
    setTopUpAmount(amount) {
      this.$store.dispatch("payment/setTopUpAmount", amount);
    },
    backToAccount() {
      this.$store.dispatch("setStep", STEP.ACCOUNT);
    },
    setPaymentBy(by) {
      this.$store.dispatch("payment/setPaymentBy", by);
    },
    toPayment(){
      this.$store.dispatch('setStep',STEP.SUCCESS)
    }
  },
};
</script>

<style lang="scss" scoped>
.back {
  margin-bottom: 10px;
}
.topup-header {
  margin-bottom: 10px;
}

.head-num {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.ta-input {
  width: 420px;
}

.badge-list {
  margin: 10px 0;
  display: flex;
  gap: 15px;
}

.choose-payment-method .head-num {
  align-items: center;
  margin-top: 30px;
}
</style>