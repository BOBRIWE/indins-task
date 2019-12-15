<template>
  <main class="Index">
    <nuxt-link class="Index__link" to="/page-1">Page 1</nuxt-link>
    <nuxt-link class="Index__link" to="/page-2">Page 2</nuxt-link>
  </main>
</template>

<script>

</script>

<style lang="scss">
.Index {
  display: grid;
  justify-content: center;
  height: 100vh;
  align-content: center;

  &__link {
    text-decoration: none;
    color: #3B8070;
    border: #3B8070 solid 2px;
    border-radius: 10px;
    padding: 30px;
    text-transform: uppercase;
    margin-bottom: 20px;

    &:hover {
      cursor: pointer;
      background-color: rgba(59, 128, 112, .3);
    }
  }
}
</style>

