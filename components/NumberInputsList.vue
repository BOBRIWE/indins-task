<template>
  <section>
    <article v-for="(number, index) in numbers" v-bind:key="index">
      <NumberInput @onNumberChanged="onNumberChanged(index, $event)"/>
      <div v-if="numbers.length - 1 !== index">+</div>
    </article>
    <article>
      <div>=</div>
      <input disabled :value="sum">
    </article>
  </section>
</template>

<script>
import NumberInput from "./NumberInput";
import SpecialNumber from "./SpecialNumber.js";

export default {
  name: "NumberInputsList",
  components: {
    NumberInput
  },
  data: function () {
    return {
      numbers: [
        new SpecialNumber('0')
      ],
      sum: 0
    }
  },
  methods: {
    onNumberChanged(index, newNumber) {
      const numbers = [...this.numbers];
      numbers[index] = newNumber;

      if (!isNaN(newNumber.getNumerator())) {
        if (this.isLast(index)) {
          numbers.push(new SpecialNumber(''));
        }
      } else {
        const isLastNaN = isNaN(numbers[numbers.length - 1].getNumerator());
        if (this.isPreLast(index) && isLastNaN) {
          numbers.pop();
        }
      }

      this.numbers = [...numbers];
    },

    isLast(index) {
      return this.numbers.length - 1 === index;
    },

    isPreLast(index) {
      return this.numbers.length - 2 === index;
    },

    calculateSum(numbers) {
      let sum = 0;
      for (let i = 0; i < numbers.length - 1; i++) {
        sum += numbers[i].getEvaluated();
      }

      return sum;
    }
  },
  watch: {
    numbers() {
      this.sum = this.calculateSum(this.numbers);
    }
  }
}
</script>

<style scoped>

</style>
