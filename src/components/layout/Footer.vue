<template>
  <footer class="footer">
    <div class="left">
      <span
        >© 2020 Fasterpay Ltd. All rights reserved. Fasterpay Limited (FRN:
        900681) is authorised by the Financial Conduct Authority</span
      >
      <br />
      <span
        >under the Electronic Money Regulations 2011 for the issuing of
        electronic money and payment instruments.</span
      >
    </div>
    <div class="right">
      <div class="secure">
        <div class="icon">
          <img src="@/assets/images/secure.svg" alt="Secure" />
        </div>
        <div class="content">
          <div class="text">
            <span>Your payment</span>
            <br />
            <span>is 100% secure</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  padding-left: 25px;
  padding-right: 25px;
  background: var(--blue-900);
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--fw-medium);
  color: var(--clr-light);
  line-height: 15px;
  font-size: 9px;
}

.secure {
  display: flex;
  align-items: center;
  border-radius: var(--radius-base);
  border: 1px solid var(--blue-300);
  font-size: 4px;
  height: 23px;
  .icon {
    padding: 0 3px;
    img{
      margin-top: 3px;
    }
  }
  .content {
    background: var(--blue-300);
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 3px;
  }
  .text {
    line-height: 6px;
    color: var(--blue-900);
    font-weight: var(--fw-bold);
    text-transform: uppercase;
  }
}
</style>