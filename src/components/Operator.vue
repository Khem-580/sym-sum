<template>
  <div v-html="operator" class="_operator" :style="styleObject" />
</template>

<script>
export default {
  name: "Operator",
  props: {
    sign: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: false,
    }
  },
  computed: {
    operator() {
      let utf8 = "&#xF7";
      if (this.sign === 0)
        utf8 = "&#x2B";
      else if (this.sign === 1)
        utf8 = "&#x2212";
      else if (this.sign === 2)
        utf8 = "&#xD7";
      return utf8;
    },
    styleObject() {
      return {
        color: this.color,
      }
    },
  }
}
</script>

<style lang="less" scoped></style>
