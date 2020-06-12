<template>
  <div v-if="!src" class="icon" v-html="utfSymbol" />
  <img v-else class="icon" :src="src" />
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
      return "&#x1F3" + this.icon+ ";";
    },
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
.icon {
  display: inline-block;
  color:blue;
  border-radius: 20%;
  text-align: center;
  box-shadow: 1px 0px 10px 0px rgba(0,0,0,0.75);
  vertical-align: text-bottom;
  font-size: 28px;
  width: 36px;
  @media (min-width: 375px) {
    font-size: 32px;
    width: 48px;
    height: 45px;
    @media (min-width: 768px) {
      font-size: 55px;
      width: 85px;
      height: 80px;
    }
  }
}

</style>