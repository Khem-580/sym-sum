<template>
  <div>
    <div class='symbols-container'>
      <ActiveSymbols v-for="symbolAnswer in symbolAnswers"
        @emitClick="answerControl"
        :icon="symbolAnswer.var.symbol"
        :selected="symbolAnswer.selected"
        :pos="symbolAnswer.pos"
        :key="'symbolAnswer' + symbolAnswer.pos"
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
  data() {
    return {
      clickedSymbols: [],
    }
  },
  computed: {
    symbolAnswers() {
      return [
        {
          pos: 0,
          var: this.x,
          selected: false,
          clear: false,
        },
        {
          pos: 1,
          var: this.y,
          selected: false,
          clear: false,
        },
        {
          pos: 2,
          var: this.z,
          selected: false,
          clear: false,
        },
        {
          pos: 3,
          var: this.z,
          selected: false,
          clear: false,
        },
        {
          pos: 4,
          var: this.y,
          selected: false,
          clear: false,
        },
        {
          pos: 5,
          var: this.z,
          selected: false,
          clear: false,
        },
        {
          pos: 6,
          var: this.x,
          selected: false,
          clear: false,
        }
      ]
    },
  },
  methods: {
    answerControl(pos) {
      const data = {...this.symbolAnswers[pos]};
      data.selected = !data.selected;
      this.symbolAnswers.splice(pos, 1, data);
      console.log(this.symbolAnswers[pos]);
      this.$forceUpdate();
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
