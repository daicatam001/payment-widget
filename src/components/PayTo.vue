<template>
  <div class="pay-to">
    <div class="label">Pay to</div>
    <div class="avatar">
      <img src="@/assets/images/pubg.png" alt="Avatar" />
    </div>
    <div class="content">
      <div class="line-1">PlayerUnknown's Battlegrounds</div>
      <div class="line-2">
        <div class="brief">FasterPay Business Pro Account</div>
        <State />
      </div>
      <div class="line-3">
          <Stars :star="4"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.pay-to {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
.label{
    font-size: 20px;
    line-height: 31px;
    font-weight: var(--fw-bold);
}
.line-1{
    font-size: var(--heading-4);
    line-height: 12px;
    margin-bottom: 3px;
    font-weight: var(--fw-bold);
}
.line-2{
    font-size: var(--heading-5);
    line-height: 18px;
    margin-bottom: 3px;
    display: flex;
    gap: 20px;
}
</style>