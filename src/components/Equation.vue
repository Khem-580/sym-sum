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
import { mathOperator, mathOperatorZ } from '../common/mathOperator';
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
      return parseInt(this.x.symbol + this.y.symbol + this.z.symbol) % 2;
    },
    answer() {
      if (this.y && this.z) 
        return mathOperatorZ(this.x.value, this.y.value, this.z.value)[this.firstOperator+'-'+this.secondOperator];
      else if (this.y) {
        return mathOperator(this.x.value, this.y.value)[this.firstOperator];
      }
      return this.x.value;
    },
  },
}
</script>

<style scoped>

</style>