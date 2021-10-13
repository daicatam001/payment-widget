<template>
  <div class="account">
    <div class="title">My FasterPay Accounts</div>
    <div class="subtitle">
      <img src="@/assets/images/warn.svg" />
      <span>
        Insufficient balance. To continue, load your account instead to pay
      </span>
    </div>
    <div class="account-card-list">
      <Card>
        <div class="account-card">
          <div class="line-1">
            <img src="@/assets/images/eu.svg" /> <span>EUR</span>
          </div>
          <div class="line-2">€0.00</div>
        </div>
      </Card>
    </div>
    <div class="title-2">Bank transfers</div>
    <div class="bank-transfer">
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
    <div class="title-2">E-wallets</div>
    <div class="e-wallets">
      <Card title="AliPay">
        <div class="logo-card">
          <img src="@/assets/images/alipay.png" />
        </div>
      </Card>
      <Card title="Wechat Pay">
        <div class="logo-card">
          <img src="@/assets/images/wechat.png" />
        </div>
      </Card>
      <Card title="PayPal">
        <div class="logo-card">
          <img src="@/assets/images/paypal.png" />
        </div>
      </Card>
    </div>
    <div class="place-order">
      <button class="btn-primary btn-place-order">Top Up Account</button>
      <div class="policy-term">
        By paying you agree to FasterPay’s <a href="#">Terms of Service</a> and
        <a href="#">Privacy Policy</a>.
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/ui/Card.vue";
export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: var(--heading-1);
  font-weight: var(--fw-bold);
  line-height: 31px;
}
.title-2 {
  font-size: var(--heading-3);
  font-weight: var(--fw-bold);
  line-height: 22px;
}
.subtitle {
  font-size: var(--heading-5);
  font-weight: var(--fw-medium);
  color: var(--clr-gray);
  display: flex;
  align-items: center;
  line-height: 19px;
  gap: 5px;
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