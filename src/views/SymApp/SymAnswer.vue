<template>
  <div>
    <div class='symbols-container'>
      <ActiveSymbols v-for="symbolAnswer in symbolAnswers"
        @emitClick="answerControl"
        :icon="symbolAnswer.var.symbol"
        :selected="symbolAnswer.selected"
        :pos="symbolAnswer.pos"
        :key="'symbolAnswer' + symbolAnswer.pos"
        :class="symbolAnswer.classes"
      />
    </div>
    <hr class="underline-symbols" />
  </div>
</template>

<script>
import ActiveSymbols from '../../components/ActiveSymbols'

export default {
  name: 'SymAnswer',
  components: {
    ActiveSymbols
  },
  props: {
    x: {
      type: Object,
      required: true,
    },
    y: {
      type: Object,
      required: true,
    },
    z: {
      type: Object,
      required: true,
    },
  },
  computed: {
    symbolAnswers() {
      return [
        {
          pos: 0,
          var: this.x,
          selected: false,
          done: false,
          classes: '',
        },
        {
          pos: 1,
          var: this.y,
          selected: false,
          done: false,
          classes: '',
        },
        {
          pos: 2,
          var: this.z,
          selected: false,
          done: false,
          classes: '',
        },
        {
          pos: 3,
          var: this.z,
          selected: false,
          done: false,
          classes: '',
        },
        {
          pos: 4,
          var: this.y,
          selected: false,
          done: false,
          classes: '',
        },
        {
          pos: 5,
          var: this.z,
          selected: false,
          done: false,
          class: '',
        },
        {
          pos: 6,
          var: this.x,
          selected: false,
          done: false,
          class: '',
        }
      ]
    },
  },
  methods: {
    answerControl(pos) {
      const isChanged = this.isSymbolChangeable(pos);
      if (isChanged) {
        this.symbolAnswers[pos].selected = !this.symbolAnswers[pos].selected;
        this.symbolAnswers[pos].classes = 'selectable';
      }
      else {
        this.symbolAnswers[pos].classes = 'unselectable';
        setTimeout(() => {
          this.symbolAnswers[pos].classes = '';
          this.$forceUpdate();
        }, 1000);
      }
      this.$forceUpdate();
      console.log(this.symbolAnswers[pos]);
    },
    isSymbolChangeable(pos) {
      const hasSelected = this.symbolAnswers[pos].selected;
      if (hasSelected)
        return this.isSymbolMinOrMaxIndex(pos);
      else
        return this.isSelectedSymbolsAdjacentWith(pos);
    },
    getIndexPropSymbols(jsonKey) {
      const symbolsList = [];
      this.symbolAnswers.map((symbolAnswer, index) => {
        if (symbolAnswer[jsonKey]) {
          symbolsList.push(index);
        }
      });
      return symbolsList;
    },
    isSymbolMinOrMaxIndex(pos) {
      const indexOfSelectedSymbols = this.getIndexPropSymbols('selected');
      const minPosSelected = Math.min(...indexOfSelectedSymbols);
      const maxPosSelected = Math.max(...indexOfSelectedSymbols);
      if (pos === minPosSelected || pos === maxPosSelected) {
        return true;
      }
      return false;
    },
    isSelectedSymbolsAdjacentWith(pos) {
      const indexOfSelectedSymbols = this.getIndexPropSymbols('selected');
      const isAdjacentLeft = pos !== 0 ? this.symbolAnswers[pos - 1].selected : false;
      const isAdjacentRight = pos !== this.symbolAnswers.length - 1 ? this.symbolAnswers[pos + 1].selected : false;
      const isAdjacentAnswer = isAdjacentLeft || isAdjacentRight;
      if (isAdjacentAnswer || indexOfSelectedSymbols.length == 0) {
        return true;
      }
      return false;
    },
  }
}
</script>

<style lang='less' scoped>

@import '../../less/global-var.less';

hr.underline-symbols {
  .set-symbolClickColor();
  .set-symbolWidth();
  background-color: @symbolClickColor;
  border: 0 none;
  margin: 0 auto;
  height: 7px;
  width: unit(7 * @symbolWidth, px);
  @media (min-width: 375px) {
    height: 10px;
    width: unit(7 * @symbolWidth-375, px);
    @media (min-width: 768px) {
      width: unit(7 * @symbolWidth-768, px);
    }
  }
}
.symbols-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 30px 5px 0px 5px;

  @media (min-width: 425px) {
    padding: 30px 20px 0px 20px;
  }
}

</style>
