<template>
  <section class="ModalWindow" :class="{'ModalWindow--shown': $props.isShown}">
    <header class="ModalWindow__header">
      <slot name="header">Modal window header</slot>
    </header>
    <main>
      <slot name="main">Body</slot>
    </main>
    <footer class="ModalWindow__footer">
      <button @click="onButtonClicked" class="ModalWindow__button">{{buttonValue || defaultButtonValue}}</button>
    </footer>
  </section>
</template>

<script>
export default {
  name: "ModalWindow",
  props: {
    buttonValue: String,
    isShown: Boolean
  },
  data() {
    return {
      defaultButtonValue: 'OK'
    };
  },
  methods: {
    onButtonClicked(event) {
      this.$emit('onModalButtonClicked');
    }
  }
}
</script>

<style lang="scss">
.ModalWindow {
  display: none;
  box-shadow: 9px 14px 68px -4px rgba(0,0,0,0.42);
  padding: 30px;

  &__header {
    color: #7F828B;
    margin-bottom: 40px;
  }

  &__footer {
    display: grid;
    justify-items: end;
    margin-top: 20px;
  }

  &__button {
    background-color: #3B8070;
    opacity: .4;
    border: none;
    padding: 10px;
    color: white;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      opacity: .2;
      cursor: pointer;
    }
  }

  &--shown {
    display: grid;
  }
}
</style>
