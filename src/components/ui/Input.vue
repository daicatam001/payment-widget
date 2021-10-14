<template>
{{isEmpty}}
  <div class="ta-input" :class="{ 'is-empty': isEmpty }">
    <input ref="input" type="number" :value="value" />
    <label> {{ label }}</label>
    <span class="suffix" v-if="suffix">{{ suffix }}</span>
  </div>
</template>

<script>
export default {
  props: ["label", "suffix", "value"],
  computed: {
    isEmpty() {
      return this.$refs.input && !!this.$refs.input.value.trim();
    },
  },
};
</script>

<style scoped>
.ta-input {
  height: 56px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #c8d4ea;
  display: block;
  position: relative;
  padding: 18px 16px;
}
input {
  font-size: 16px;
  position: relative;
  z-index: 1;
  width: 100%;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 30px;
  line-height: 30px;
  padding-right: 50px;
}
input:focus ~ label {
  font-size: 12px;
  transform: translateY(calc(-50% - 14px));
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

label {
  position: absolute;
  top: 50%;

  left: 16px;
  display: block;

  color: #68879a;
  font-size: 12px;
  transform: translateY(calc(-50% - 14px));
  transition-property: transform, width;
  transition-duration: 0.2s, 0.2s;
  transition-timing-function: ease-out;
}
.suffix {
  color: #68879a;
  font: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
}

.ta-input.is-empty label {
  font-size: 16px;
  transform: translateY(-50%);
}
</style>