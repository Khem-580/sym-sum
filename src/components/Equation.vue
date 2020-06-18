<template>
  <div class="center-nowarp">
    <Symbols :icon="x.symbol" />
    <template v-if="y">
      <Operator :sign="firstOperator" />
      <Symbols :icon="y.symbol" />
      <template v-if="z">
        <Operator :sign="secondOperator" />
        <Symbols :icon="z.symbol" />
      </template>
    </template>
    <div class="_equal"> = </div>
    <div :class="classAnswer"> {{ answer }} </div>
  </div>
</template>

<script>
import { mathOperator, mathOperatorZ } from '../common/mathOperator';
import Symbols from './Symbols.vue';
import Operator from './Operator.vue'

export default {
  name: "Equation",
  components: {
    Symbols,
    Operator
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
    classAnswer() {
      return {
        'answer': true,
        'fix-long-answer': this.answer <= -10,
      }
    }
  },
}
</script>

<style lang="less" scoped>
.center-nowarp {
  text-align: center;
  white-space: nowrap;
}

.answer {
  display: inline-block;
  color: rgba(111, 191, 76, 1);
  text-shadow: 1px 2px 4px rgba(111, 191, 76, 0.5);
  vertical-align: text-bottom;
  font-size: 25px;
  @media (min-width: 375px) {
    vertical-align: super;
    font-size: 30px;
    @media (min-width: 768px) {
      vertical-align: text-bottom;
      font-size: 54px;
    }
  }
}

.fix-long-answer {
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 27px;
  }
}
</style>
