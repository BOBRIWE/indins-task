<template>
  <section class="MultiPageForm">
    <MultiPageInput
      :class="{'MultiPageInput--current': currentIndex === index}"
      v-for="(valueName, index) in $props.valuesToGet"
      :key="valueName"
      :placeholder="valueName"
      buttonValue="Далее"
      @onInputDone="onInputDone(index, $event)"
    />
    <article class="MultiPageForm__modal-window" :class="{'MultiPageForm__modal-window--shown': isFinal}">
      <MultiPageInput
        class="MultiPageInput--current"
        :placeholder="finalValue"
        buttonValue="Закончить"
        @onInputDone="onFinalDone"
      />
    </article>
  </section>
</template>

<script>
import MultiPageInput from "./MultiPageInput";
export default {
  name: "MultiPageForm",
  data() {
    return {
      values: [],
      isFinal: false,
      currentIndex: 0
    };
  },
  components: {
    MultiPageInput
  },
  props: {
    valuesToGet: Array,
    finalValue: String
  },
  methods: {
    onInputDone(index, value) {
      this.values.push(value);
      this.currentIndex++;

      if (index === this.$props.valuesToGet.length - 1) {
        this.isFinal = true;
      }
    },
    onFinalDone(value) {
      this.values.push(value);
      this.$emit('onAllValuesDone', this.values);
    }
  }
}
</script>

<style>
.MultiPageForm {
}

.MultiPageForm__modal-window {
  display: none;
  position: absolute;
  width: 300px;
  height: 300px;
  box-shadow: 9px 14px 68px -4px rgba(0,0,0,0.42);
}

.MultiPageForm__modal-window--shown {
  display: block;
}
</style>
