<template>
  <section class="MultiPageForm">
    <div v-if="!isStarted">
      <button class="MultiPageForm__button" @click="isStarted = true">Далее</button>
    </div>
    <div v-if="isStarted">
      <MultiPageInput
        :is-focused="currentIndex === index"
        v-for="(valueName, index) in $props.valuesToGet"
        :key="valueName"
        :placeholder="valueName"
        buttonValue="Далее"
        @onInputDone="onInputDone(index, $event)"
      />

      <ModalWindow
        @onModalButtonClicked="onFinalDone"
        :isShown="isFinal"
        button-value="Закончить"
      >
        <template v-slot:header>
          Почти закончили!
        </template>
        <template v-slot:main>
          <input
            class="MultiPageForm__final-input"
            type="text"
            @input="finalValue = $event.target.value"
            :placeholder="finalValueName"
          >
        </template>
      </ModalWindow>
    </div>
  </section>
</template>

<script>
import MultiPageInput from "./MultiPageInput";
import ModalWindow from "./ModalWindow";
export default {
  name: "MultiPageForm",
  data() {
    return {
      values: [],
      finalValue: '',
      isFinal: false,
      currentIndex: NaN,
      isStarted: false
    };
  },
  mounted() {
    this.currentIndex = 0;
  },
  components: {
    ModalWindow,
    MultiPageInput
  },
  props: {
    valuesToGet: Array,
    finalValueName: String
  },
  methods: {
    onInputDone(index, value) {
      this.values.push(value);
      this.currentIndex++;

      if (index === this.$props.valuesToGet.length - 1) {
        this.isFinal = true;
      }
    },
    onFinalDone() {
      this.values.push(this.finalValue);
      this.$emit('onAllValuesDone', this.values);
    }
  }
}
</script>

<style lang="scss">
.MultiPageForm {
  &__button {
    background-color: #3B8070;
    opacity: .4;
    border: none;
    padding: 20px;
    color: white;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      opacity: .2;
      cursor: pointer;
    }
  }

  &__final-input {
    padding: 10px;
    font-size: 20px;
    outline: none;

    &::placeholder {
      color: darkgray;
    }
  }
}
</style>
