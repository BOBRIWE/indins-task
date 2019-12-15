<template>
  <main class="Page1">
    <h1>Page 1</h1>
    <NumberInputsList/>
  </main>
</template>

<script>
import NumberInputsList from "../components/NumberInputsList";

export default {
  name: "page-1",
  components: {
    NumberInputsList
  }
}
</script>

<style>
.Page1 {
  display: grid;
  justify-content: center;
  height: 100vh;
  align-content: center;
}
</style>
