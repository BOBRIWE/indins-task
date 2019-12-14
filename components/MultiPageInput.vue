<template>
  <article class="MultiPageInput">
    <input type="text" @input="value = $event.target.value" :placeholder="$props.placeholder">
    <button @click="onButtonClick">{{$props.buttonValue}}</button>
  </article>
</template>

<script>
export default {
  name: "MultiPageInput",
  props: {
    placeholder: String,
    buttonValue: String
  },
  data() {
    return {
      value: ''
    };
  },
  methods: {
    onButtonClick() {
      this.$emit('onInputDone', this.value);
    }
  }
}
</script>

<style scoped>
.MultiPageInput {
  display: none;
}

.MultiPageInput--current {
  display: block;
}
</style>
