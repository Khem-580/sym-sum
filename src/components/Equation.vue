<template>
  <div>
    <template v-if="x && y && z">
      <Symbols :icon="x.symbol" /> - <Symbols :icon="y.symbol" /> - <Symbols :icon="z.symbol" /> = {{ answer }} <br />
      {{ firstOperator }} {{ secondOperator }}
    </template>
    <template v-else-if="x && y">
      <Symbols :icon="x.symbol" /> - <Symbols :icon="y.symbol" /> = {{ answer }} <br />
      {{ firstOperator }}
    </template>
    <template v-else-if="x">
      <Symbols :icon="x.symbol" /> = {{ answer }} <br />
    </template>
  </div>
</template>

<script>
import Symbols from './Symbols.vue';

export default {
  name: "Equation",
  components: {
    Symbols
  },
  props: {
    x: {
      type: Object,
      required: true,
    },
    y: {
      type: Object,
      required: false,
    },
    z: {
      type: Object,
      required: false,
    },
  },
  computed: {
    firstOperator() {
      return parseInt(this.x.symbol + this.y.symbol) % 4;
    },
    secondOperator() {
      return parseInt(this.x.symbol + this.y.symbol + this.z.symbol) % 4;
    },
    answer() {
      if (this.x && this.y && this.z) 
        return this.x.value + this.y.value + this.z.value;
      else if (this.x && this.y) {
        console.log(this.x);
        console.log(this.y);
        console.log(this.firstOperator);
        return this.customMath[0](this.x.value ,this.y.value);
      }
      return this.x.value;
    },
    customMath() {
      return {
        0: function(x, y) {return x + y},
        1: function(x, y) {return x - y},
        2: function(x, y) {return x * y},
        3: function(x, y) {return x / y},
      }
    }
  },
}
</script>

<style scoped>

</style>