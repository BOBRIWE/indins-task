<template>
  <main class="Page2">
    <MultiPageForm
      :values-to-get="valuesToGet"
      :final-value-name="finalValue"
      @onAllValuesDone="onAllValuesDone"
    />
  </main>
</template>

<script>
import MultiPageForm from "../components/MultiPageForm";

export default {
  name: "page-2",
  components: {
    MultiPageForm
  },
  data() {
    return {
      finalValue: 'Телефон',
      valuesToGet: [
        'Фамилия',
        'Имя'
      ]
    };
  },
  methods: {
    onAllValuesDone(values) {
      let formValues = {};
      for (let i = 0; i < this.valuesToGet.length; i++) {
        formValues[this.valuesToGet[i]] = values[i];
      }
      formValues[this.finalValue] = values[values.length - 1];

      this.$store.commit('updateFormValues', formValues);
      this.$router.replace({ path: '/page-3' });
    }
  }
}
</script>

<style>
.Page2 {
  display: grid;
  justify-content: center;
  height: 100vh;
  align-content: center;
}
</style>
