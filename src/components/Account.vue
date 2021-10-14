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
      <Card>
        <div class="account-card">
          <div class="line-1">
            <img src="@/assets/images/eu.svg" /> <span>EUR</span>
          </div>
          <div class="line-2">€0.00</div>
        </div>
      </Card>
    </div>
    <div class="heading-4">Bank transfers</div>
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
    <div class="heading-4">E-wallets</div>
    <div class="card-list">
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
.account .sub-heading {
  align-items: center;
  display: flex;
  line-height: 19px;
  gap: 5px;
}

.account-card-list {
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
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