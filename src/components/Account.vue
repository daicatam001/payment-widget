<template>
  <div class="account">
    <div class="title">My FasterPay Accounts</div>
    <div class="subtitle">
      <img src="@/assets/images/warn.svg" />
      <span
        >Insufficient balance. To continue, load your account instead to
        pay</span
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  font-size: var(--heading-1);
  font-weight: var(--fw-bold);
  line-height: 31px;
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
</style>