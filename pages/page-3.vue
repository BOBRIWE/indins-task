<template>
  <main class="Page3">
    <article :key="key" v-for="(value, key) in keyValue">
      <div class="user-data-item">{{key + ': ' + value}}</div>
    </article>
  </main>
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

<style>
.Page3 {
  display: grid;
  justify-content: center;
  height: 100vh;
  align-content: center;
}

.user-data-item {
  font-size: 20px;
  padding: 10px;
}
</style>
