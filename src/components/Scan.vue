<template>
  <div class="scan">
    <div class="title">Pay with the FasterPay App</div>
    <div class="qr-code">
      <img src="@/assets/images/scan.png" alt="Qr Code" />
    </div>
    <div class="instruction">QR Payment Instruction</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.scan {
  text-align: center;
}
.title {
  font-size: var(--heading-5);
  font-weight: var(--fw-bold);
}
.instruction {
  font-size: var(--heading-5);
  font-weight: var(--fw-bold);
  color: var(--blue-600);
}
</style>