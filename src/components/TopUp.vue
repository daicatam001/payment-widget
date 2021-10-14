<template>
  <div class="topup">
    <div class="back">Choose another payment method</div>
    <div class="heading-1 topup-header">Top up My FasterPay Account</div>
    <div class="choose-top-up-amount">
      <div class="head">
        <NumberBox :number="1" />
        <div class="head-text">
          <div class="heading-3">Choose top up amount</div>
          <div class="sub-heading">
            Can be higher than the payment order value
          </div>
        </div>
      </div>
      <div class="content">
        <Input label="Top Up amount" suffix="EUR" />
        <div class="badge-list">
          <AmountBadge currency="€" amount="50.00" :active="true" />
          <AmountBadge currency="€" amount="100.00" />
          <AmountBadge currency="€" amount="150.00" />
          <AmountBadge currency="€" amount="200.00" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NumberBox from "@/components/ui/NumberBox.vue";
import Input from "@/components/ui/Input.vue";
import AmountBadge from "./ui/AmountBadge.vue";
export default {
  components: {
    NumberBox,
    Input,
    AmountBadge,
  },
};
</script>

<style lang="scss" scoped>
.topup-header {
  margin-bottom: 10px;
}

.choose-top-up-amount {
  .head {
    display: flex;
    gap: 10px;
  }
  .content {
    margin-top: 20px;
    .ta-input{
      width: 420px;
    }
  }
}
.badge-list {
  margin-top: 10px;
  display: flex;
  gap: 15px;
}
.bank-transfer,
.e-wallets {
  margin: 20px 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
}
.account-card-list {
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
}
.account-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .line-1 {
    display: flex;
    gap: 10px;
    color: var(--clr-gray);
  }
  .line-2 {
    font-weight: var(--fw-bold);
  }
}
.logo-card {
  height: 100%;
  display: flex;
  align-items: center;
}
.btn-place-order {
  width: 340px;
  height: 48px;
  line-height: 48px;
  font-weight: var(--fw-bold);
  text-align: center;
  font-size: var(--heading-3);
}
.policy-term {
  width: 340px;
  line-height: 20px;
  margin-top: 10px;
  font-size: var(--heading-5);
  color: var(--clr-dark);
  a {
    color: inherit;
  }
}
</style>