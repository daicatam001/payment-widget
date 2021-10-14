<template>
  <div class="topup">
    <div class="back back-link">
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
        <Input label="Top Up amount" suffix="EUR" :value="topUpAmount" @update="updateTopUpAmount" />
        <div class="badge-list">
          <AmountBadge currency="€" :amount="50" :active="topUpAmount == 50" />
          <AmountBadge currency="€" :amount="100" :active="topUpAmount == 100" />
          <AmountBadge currency="€" :amount="150" :active="topUpAmount == 150"/>
          <AmountBadge currency="€" :amount="200" :active="topUpAmount == 200"/>
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
    <div class="top-up">
      <button class="btn-primary btn-big" @click="toTopUp">
        Top Up Account
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    topUpAmount(){
      return this.$store.getters['payment/topUpAmount']
    }
  }
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

.choose-payment-method .head-num{
    align-items: center;
    margin-top: 30px;
}
</style>