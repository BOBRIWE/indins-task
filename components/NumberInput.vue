<template>
  <div>
    <input
      class="NumberInput__input"
      type="text"
      @input="oninput"
      :class="{'NumberInput--error': isError}"
    />
  </div>
</template>

<script>
import SpecialNumber from "./SpecialNumber.js";

export default {
  name: "NumberInput",
  data() {
    const number = new SpecialNumber('');
    return {
      rawNumber: number,
      isError: !number.isSupportedNumber()
    }
  },
  watch: {
    rawNumber(val) {
      this.$emit('onNumberChanged', val);
    }
  },
  methods: {
    oninput(event) {
      const { value } = event.target;
      this.updateNumber(value);
    },

    updateNumber(number) {
      this.rawNumber = new SpecialNumber(number);
      this.isError = !this.rawNumber.isSupportedNumber();
    },
  }
};
</script>

<style lang="scss">
.NumberInput {
  outline: none;

  &--success {
    border-color: green;
  }

  &--error {
    border-color: red;
  }

  &__input {
    padding: 5px;
    font-size: 15px;
    outline: none;

    &::placeholder {
      color: darkgray;
    }
  }
}
</style>
