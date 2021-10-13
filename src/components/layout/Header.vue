<template>
  <header class="header">
    <div class="left">
      <div class="wrapper">
        <div class="branch">
          <img src="@/assets/images/logo.png" alt="FastPay" />
        </div>
        <div class="locale">
          <img src="@/assets/images/uk-flag.svg" alt="United Kingdom" />
          <span>United Kingdom</span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="wrapper">
        <div class="user">
          <div class="avatar">JS</div>
          <span>Log Out</span>
        </div>
        <div class="lang">
          <img src="@/assets/images/lang.svg" alt="Language" />
          <span>Eng</span>
        </div>
        <div class="help">
          <img src="@/assets/images/help-circle.svg" alt="Help" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  padding-left: 25px;
  padding-right: 25px;
  background: var(--blue-900);
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--fw-bold);
  color: var(--clr-light);
  letter-spacing: 0.233333px;
}
.left,
.right {
  .wrapper {
    display: flex;
    align-items: center;
  }
}

.right .wrapper {
  gap: 25px;
}

.branch,
.locale,
.user,
.lang {
  height: 38px;
}
.locale {
  display: flex;
  gap: 8px;
  align-items: center;
}
.user,
.lang,
.help {
  display: flex;
  align-items: center;
  gap: 7px;
}

.avatar {
  background: var(--clr-accent);
  text-align: center;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  color: var(--blue-900);
  line-height: 25px;
}
</style>