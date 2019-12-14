<template>
  <div>
    <input
      class="NumberInput"
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
  data: function() {
    const number = new SpecialNumber('');
    return {
      rawNumber: number,
      isError: number.isSupportedNumber()
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

<style>
.NumberInput {
  outline: none;
}

.NumberInput--success {
  border-color: green;
}

.NumberInput--error {
  border-color: red;
}
</style>
