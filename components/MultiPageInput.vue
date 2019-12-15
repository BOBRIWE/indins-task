<template>
  <article
    class="MultiPageInput"
    :class="{'MultiPageInput--current': $props.isFocused}"
  >
    <input ref="input" class="MultiPageInput__input" type="text" @input="value = $event.target.value" :placeholder="$props.placeholder">
    <button class="MultiPageInput__button" @click="onButtonClick">{{$props.buttonValue}}</button>
  </article>
</template>

<script>
export default {
  name: "MultiPageInput",
  props: {
    placeholder: String,
    buttonValue: String,
    isFocused: Boolean
  },
  data() {
    return {
      value: ''
    };
  },
  watch: {
    isFocused(newVal) {
      if (newVal) {
        this.$refs.input.focus();
      }
    }
  },
  methods: {
    onButtonClick() {
      this.$emit('onInputDone', this.value);
    }
  }
}
</script>

<style lang="scss">
.MultiPageInput {
  display: none;

  &__input {
    padding: 10px;
    font-size: 20px;
    outline: none;

    &::placeholder {
      color: darkgray;
    }
  }

  &__button {
    background-color: #3B8070;
    opacity: .4;
    border: none;
    padding: 5px;
    color: white;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      opacity: .2;
      cursor: pointer;
    }
  }

  &--current {
    display: grid;

  }
}
</style>
