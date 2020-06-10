<template>
  <div>{{ whatComponent }}</div>
</template>

<script>
export default {
  name: "Header",  
  data: function() {
    return {
      whatComponent: "Header"
    };
  },
};
</script>

<style scoped>
  div {
    font-size: 2em;
    text-align: center;
    background: darkseagreen;
  }
</style>