<template>
  <div class="state">
    <img src="@/assets/images/verify.svg" />
    <span class="text">Verified</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.state {
  color: var(--blue-500);
  display: flex;
  align-items: center; 
  gap: 10px;
}
.text {
  font-size: var(--heading-5);
  line-height: 16px;
}
</style>