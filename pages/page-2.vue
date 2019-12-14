<template>
  <main class="Page2">
    <MultiPageForm
      :values-to-get="valuesToGet"
      :final-value="finalValue"
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
      finalValue: 'phone',
      valuesToGet: [
        'second-name',
        'first-name'
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
  justify-items: center;
  padding-top: 300px;
}
</style>
