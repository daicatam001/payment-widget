<template>
  <div class="order">
    <div class="order-name">Order FP1763415-9</div>
    <Line />
    <div class="product-name">500 G-Coins golden Package</div>
    <Line />
    <ul>
      <li>
        <div class="label">Amount</div>
        <div class="price">45.00 EUR</div>
      </li>
      <li>
        <div class="label">Taxes</div>
        <div class="price">0.00 EUR</div>
      </li>
    </ul>
    <Line />
    <div class="total">
      <div class="label">Total amount</div>
      <div class="price">45.00 EUR</div>
    </div>
  </div>
</template>

<script>
import Line from "@/components/ui/Line.vue";
export default {
  components: {
    Line,
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
    font-size: var(--heading-4);
    display: flex;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 20px;
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