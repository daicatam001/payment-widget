<template>
  <div class="order">
    <div class="order-name">Order {{ orderNumber }}</div>
    <Line />
    <div class="product-name">{{ productName }}</div>
    <Line />
    <ul>
      <li>
        <div class="label">Amount</div>
        <div class="price">
          {{ $filters.toCurrency(orderAmount) }} {{ currency }}
        </div>
      </li>
      <li v-if="step !== STEP.TOP_UP && paymentType == PAYMENT_TYPE.DIRECT">
        <div class="label">Taxes</div>
        <div class="price">
          {{ $filters.toCurrency(taxAmount) }} {{ currency }}
        </div>
      </li>
      <li
        v-if="
          step !== STEP.ACCOUNT &&
          extraAmount &&
          paymentType == PAYMENT_TYPE.TOP_UP
        "
      >
        <div class="label">Extra amount</div>
        <div class="price">
          {{ $filters.toCurrency(extraAmount) }} {{ currency }}
        </div>
      </li>
      <template
        v-if="step === STEP.TOP_UP && paymentType == PAYMENT_TYPE.TOP_UP"
      >
        <li>
          <div class="label">Top Up fees</div>
          <div class="price">
            -{{ $filters.toCurrency(topUpFees) }} {{ currency }}
          </div>
        </li>
        <li>
          <div class="label">Balance to be loaded</div>
          <div class="price">
            {{ $filters.toCurrency(balance) }} {{ currency }}
          </div>
        </li>
      </template>
    </ul>
    <Line />
    <div class="total">
      <div class="label">Total amount</div>
      <div class="price">
        {{ $filters.toCurrency(totalOrderAmount) }} {{ currency }}
      </div>
    </div>
  </div>
</template>

<script>
import { PAYMENT_TYPE, STEP } from "@/constants";
export default {
  computed: {
    paymentType() {
      return this.$store.getters["payment/paymentType"];
    },
    orderNumber() {
      return this.$store.getters["order/orderNumber"];
    },
    productName() {
      return this.$store.getters["order/productName"];
    },
    orderAmount() {
      return this.$store.getters["order/orderAmount"];
    },
    taxAmount() {
      return this.$store.getters["order/taxAmount"];
    },
    totalOrderAmount() {
      return this.$store.getters["order/totalOrderAmount"];
    },
    extraAmount() {
      return this.$store.getters["order/extraAmount"];
    },
    currency() {
      return this.$store.getters["order/currency"];
    },
    step() {
      return this.$store.getters.step;
    },
    topUpFees() {
      return this.$store.getters["order/topUpFees"];
    },
    balance() {
      return this.$store.getters.balance;
    },
  },
  data() {
    return {
      STEP,
      PAYMENT_TYPE,
    };
  },
};
</script>

<style lang="scss" scoped>
.order-name {
  font-weight: 600;
  font-size: var(--heading-3);
  line-height: 20px;
}
.product-name {
  font-weight: 500;
  font-size: var(--heading-3);
  line-height: 22px;
}
ul {
  li {
    list-style: none;
    font-size: 14px;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    .price {
      flex-shrink: 0;
      white-space: nowrap;
    }
  }
}
.total {
  text-align: right;
  .label {
    font-size: var(--heading-3);
    margin-bottom: 10px;
  }
  .price {
    font-size: var(--heading-3);
    font-weight: var(--fw-bold);
    line-height: 20px;
  }
}
</style>