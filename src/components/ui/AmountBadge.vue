<template>
  <div class="amount-badge" :class="{ active: active }">
    <span class="currency">{{ currency }}</span>
    <span class="amount">{{ $filters.toCurrency(amount) }}</span>
  </div>
</template>

<script>
export default {
  props: ["currency", "amount", "active"],
};
</script>

<style scoped lang="scss">
.amount-badge {
  cursor: pointer;
  display: inline-block;
  min-width: 92px;
  text-align: center;
  height: 43px;
  line-height: 43px;
  background-color: var(--clr-light);
  border: 1px solid #c8d4ea;
  color: #455a64;
  font-size: 15px;
  border-radius: 5px;
  padding: 0 16px;

  &:hover{
    border-color: var(--clr-accent-light);
  }

  &.active {
    background-color: var(--clr-accent);
    font-weight: bold;
    color: var(--clr-dark);
    border-color: var(--clr-accent);
  }
}
</style>