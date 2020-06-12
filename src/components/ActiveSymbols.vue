<template>
  <span v-if="!src" class="icon" v-html="utfSymbol" />
  <img v-else :src="src" />
</template>

<script>
export default {
  name: "SymbolsActive",
  props: {
    icon: {
      type: String,
      required: true
    },
    src: String,
  },
  computed: {
    utfSymbol() {
      return "&#x1F3" + this.icon+ ";";
    },
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>

.icon {
  font-size: 25px;
  color:blue;
  width: 34px;
}

</style>