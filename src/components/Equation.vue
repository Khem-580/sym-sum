<template>
  <div class="center-nowarp">
    <Symbols :icon="a.symbol" />
    <template v-if="b">
      <Operator :sign="firstOperator" />
      <Symbols :icon="b.symbol" />
      <template v-if="c">
        <Operator :sign="secondOperator" />
        <Symbols :icon="c.symbol" />
      </template>
    </template>
    <div class="_equal"> = </div>
    <div :class="classAnswer"> {{ answer }} </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { mathOperator, mathOperatorZ } from '../common/mathOperator';
import Symbols from './Symbols.vue';
import Operator from './Operator.vue'

export default {
  name: "Equation",
  components: {
    Symbols,
    Operator,
  },
  props: {
    a: {
      type: Object,
      required: true,
    },
    b: {
      type: Object,
      required: false,
    },
    c: {
      type: Object,
      required: false,
    },
  },
  computed: {
    firstOperator() {
      let randomSign = parseInt(this.a.symbol + this.b.symbol);
      if (this.c)
        randomSign += parseInt(this.c.symbol);
      return randomSign % 4;
    },
    secondOperator() {
      return parseInt(this.a.value + this.b.value + this.c.value) % 2;
    },
    answer() {
      if (this.b && this.c) 
        return mathOperatorZ(this.a.value, this.b.value, this.c.value)[this.firstOperator + '-' + this.secondOperator];
      else if (this.b) {
        return mathOperator(this.a.value, this.b.value)[this.firstOperator];
      }
      return this.a.value;
    },
    classAnswer() {
      return {
        '_answer': true,
        'fix-long-answer': this.answer <= -10,
      }
    },
    ...mapState({
      storeColor: state => state.symAppStore.storeColor,
    }),
  },
}
</script>

<style lang="less" scoped>
.center-nowarp {
  text-align: center;
  white-space: nowrap;
  padding: 5px 0px;
  @media (min-width: 375px) {
    padding: 10px 0px;
    @media (min-width: 768px) {
      padding: 15px 0px;
    }
  }
}

.fix-long-answer {
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 27px;
  }
}
</style>
