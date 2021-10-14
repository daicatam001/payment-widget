<template>
  <div class="number-box">
    {{ number }}
  </div>
</template>

<script>
export default {
  props: ["number"],
};
</script>

<style scoped>
.number-box {
  width: 31px;
  height: 26px;
  background-color: var(--blue-500);
  color: var(--clr-light);
  font-size: var(--heading-3);
  font-weight: var(--fw-bold);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
</style>