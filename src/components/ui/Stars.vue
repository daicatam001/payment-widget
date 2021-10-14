<template>
  <div class="stars">
    <div class="start-group">
      <span v-for="n in startCount" :key="n">
        <img src="@/assets/images/star.png" />
      </span>
      <span v-if="hasHalfStar">
        <img src="@/assets/images/half-star.png" />
      </span>
    </div>
    <img src="@/assets/images/chevron-down.svg" />
    <div class="number">
      <span>{{ star }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["star"],
  computed: {
    startCount() {
      return parseInt(this.star);
    },
    hasHalfStar() {
      return this.startCount != this.star;
    },
  },
};
</script>

<style scoped>
.stars {
  display: flex;
  gap: 10px;
}
.number {
  font-size: var(--heading-5);
  font-weight: var(--fw-bold);
}
</style>