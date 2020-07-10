<template>
  <div>
    <div class='symbols-container'>
      <ActiveSymbols v-for="symbolAnswer in symbolAnswers"
        @emitClick="activeSymbolClick"
        :icon="symbolAnswer.var.symbol"
        :selected="symbolAnswer.selected"
        :pos="symbolAnswer.pos"
        :key="'symbolAnswer' + symbolAnswer.pos"
        :class="symbolAnswer.classes"
      />
    </div>
    <hr class="underline-symbols" />
    <CircleAnswer :classes="CircleAnswerClass" @emitClick="answerCheck">{{ sumQuestion }}</CircleAnswer>
  </div>
</template>

<script>
import ActiveSymbols from '../../components/ActiveSymbols';
import CircleAnswer from '../../components/CircleAnswer';

export default {
  name: 'SymAnswer',
  components: {
    ActiveSymbols,
    CircleAnswer,
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
  data() {
    return {
      initVarUsed: {
        x: 0,
        y: 0,
        z: 0,
      },
      countVarUsed: {...this.initVarUsed},
      sumQuestion: 16,
    }
  },
  computed: {
    countVarProps() {
      return Object.keys(this.initVarUsed).length;
    },
    CircleAnswerClass() {
      return {
        'init': true,
        'correct-answer': false,
        'wrong-answer': false,
      }
    },
    symbolAnswers() {
      let activeSymbolsArr;
      let isBoringPattern;
      do {
        activeSymbolsArr = [];
        const activeSymbolKey= Math.random().toString().split('.')[1];
        this.resetCountVarUsed();
        for (let i = 0; i < 7; i++) {
          const key = activeSymbolKey[i];
          const varNum = this.getNumModVars(key);
          const activeSymbolProp = {
            pos: i,
            var: this.getVarFromNum(varNum),
            selected: false,
            done: false,
            classes: '',
          }
          activeSymbolsArr.push(activeSymbolProp);
        } 
        const isAllVarUsed = this.countVarUsed.x > 0 && this.countVarUsed.y > 0 && this.countVarUsed.z > 0;
        isBoringPattern = !isAllVarUsed;
      } while (isBoringPattern);
      return activeSymbolsArr;
    },
  },
  methods: {
    answerCheck() {
      this.answerCorrect();
    },
    answerCorrect() {
      this.CircleAnswerClass['correct-init'] = false;
      this.CircleAnswerClass['correct-answer'] = true;
      this.$forceUpdate();
      setTimeout(() => {
        this.CircleAnswerClass['correct-init'] = true;
        this.CircleAnswerClass['correct-answer'] = false;
        this.sumQuestion = 999;
        this.$forceUpdate();
      }, 1100)
    },
    answerWrong() {
      this.CircleAnswerClass['correct-init'] = false;
      this.CircleAnswerClass['wrong-answer'] = true;
      this.$forceUpdate();
      setTimeout(() => {
        this.CircleAnswerClass['correct-init'] = true;
        this.CircleAnswerClass['wrong-answer'] = false;
        this.sumQuestion = 65;
        this.$forceUpdate();
      }, 1100)
    },
    activeSymbolClick(pos) {
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
    getVarFromNum(num) {
      switch (num) {
        case 0:
          this.countVarUsed.x++;
          return this.x;
        case 1:
          this.countVarUsed.y++;
          return this.y;
        default:
          this.countVarUsed.z++;
          return this.z;
      }
    },
    getNumModVars(num) {
      return num % this.countVarProps;
    },
    resetCountVarUsed() {
      this.countVarUsed = {...this.initVarUsed};
    }
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
  width: 7 * @symbolWidth;
  @media (min-width: 375px) {
    height: 10px;
    width: 7 * @symbolWidth-375;
    @media (min-width: 768px) {
      width: 7 * @symbolWidth-768;
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
