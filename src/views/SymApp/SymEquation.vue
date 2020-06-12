<template>
  <div>
    <img v-bind:src=url />
  </div>
</template>

<script>
export default {
  name: "SymEquation",
  props: {
    url: String,
  },
}
</script>

<style scoped>

</style>