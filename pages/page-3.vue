<template>
  <section>
    <article :key="key" v-for="(value, key) in keyValue">
      <span>{{key + ': ' + value}}</span>
    </article>
  </section>
</template>

<script>
export default {
  name: "page-3",
  data() {
    return {
      keyValue: this.$store.state.formValues
    };
  }
}
</script>

<style scoped>

</style>
