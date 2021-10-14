<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="body">
        <slot></slot>
      </div>
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped>
.card {
  padding: 15px;
  border: 1px solid var(--border-clr);
  box-shadow: var(--bs-card);
  border-radius: var(--radius-base);
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &.active {
    border-color: #2af5d6;
  }
  &.active {
    border-width: 2px;
    box-shadow: var(--bs-card-active);
  }
  .body {
    height: 100%;
    width: 100%;
  }
}
.title {
  text-align: center;
  margin-top: 10px;
}
</style>
<style lang="scss">
.card .logo-card {
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
}
.card .account-card {
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
</style>