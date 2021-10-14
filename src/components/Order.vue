<template>
  <div class="order">
    <div class="order-name">Order {{orderNumber}}</div>
    <Line />
    <div class="product-name">{{productName}}</div>
    <Line />
    <ul>
      <li>
        <div class="label">Amount</div>
        <div class="price">{{$filters.toCurrency(orderAmount)}} {{currency}}</div>
      </li>
      <li>
        <div class="label">Taxes</div>
        <div class="price">{{$filters.toCurrency(taxAmount)}} {{currency}}</div>
      </li>
    </ul>
    <Line />
    <div class="total">
      <div class="label">Total amount</div>
      <div class="price">{{$filters.toCurrency(totalOrderAmount)}} {{currency}}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    orderNumber() {
      return this.$store.getters["order/orderNumber"];
    },
    productName() {
      return this.$store.getters["order/productName"];
    },
    orderAmount() {
      return this.$store.getters["order/orderAmount"];
    },
    taxAmount(){
      return this.$store.getters["order/taxAmount"];
    },
    totalOrderAmount(){
       return this.$store.getters["order/totalOrderAmount"];
    },
    currency(){
       return this.$store.getters["order/currency"];
    }
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