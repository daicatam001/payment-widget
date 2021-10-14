<template>
  <div class="topup">
    <div class="back">
      <img src="@/assets/images/chevron-back.svg" />
      <span> Choose another payment method</span>
    </div>
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

    <div class="choose-payment-method">
      <div class="head">
        <NumberBox :number="2" />
        <div class="head-text">
          <div class="heading-3">Choose payment method</div>
        </div>
      </div>
      <div class="content">
        <div class="heading-4">Instant payment methods</div>

        <div class="card-list">
          <Card title="Überweisung">
            <div class="logo-card">
              <img src="@/assets/images/fastpay.png" />
            </div>
          </Card>
          <Card title="Ideal">
            <div class="logo-card">
              <img src="@/assets/images/ideal.png" />
            </div>
          </Card>
          <Card title="Giropay">
            <div class="logo-card">
              <img src="@/assets/images/giropay.png" />
            </div>
          </Card>
          <Card title="Webmoney">
            <div class="logo-card">
              <img src="@/assets/images/webmoney.png" />
            </div>
          </Card>
        </div>
        <div class="heading-4">Non-Instant payment methods</div>
        <div class="card-list">
          <Card title="Transfer from bank account">
            <div class="logo-card">
              <img src="@/assets/images/bank-transter.png" />
            </div>
          </Card>
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
.back {
  color: var(--blue-500);
  font-size: var(--heading-5);
  font-weight: var(--fw-bold);
  cursor: pointer;
  margin-bottom: 10px;
}
.topup-header {
  margin-bottom: 10px;
}

.choose-top-up-amount {
  .head {
    display: flex;
    gap: 10px;
  }
  .content {
    margin-top: 15px;
    .ta-input {
      width: 420px;
    }
  }
}
.badge-list {
  margin-top: 10px;
  display: flex;
  gap: 15px;
}

.choose-payment-method {
  margin-top: 30px;
  .head {
    margin-bottom: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
  }
}
</style>