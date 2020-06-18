<template>
  <div v-if="!src" class="_icon" v-html="utfSymbol" />
  <img v-else class="_icon" :src="src" />
</template>

<script>
export default {
  name: "Symbols",
  props: {
    icon: {
      type: String,
      required: true
    },
    src: String,
  },
  computed: {
    utfSymbol() {
      const numberSet = parseInt("3"+this.icon) + 30;
      return "&#x1F" + numberSet + ";";
    },
  },
}
</script>
