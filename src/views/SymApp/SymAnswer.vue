<template>
  <div class='symbols-container'>
    <ActiveSymbols v-for="symbolAnswer in symbolAnswers"
      @emitClick="answerControl"
      :icon="symbolAnswer.var.symbol"
      :selected="symbolAnswer.selected"
      :pos="symbolAnswer.pos"
      :key="'symbolAnswer' + symbolAnswer.pos"
    />
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

.symbols-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 30px 5px;

  @media (min-width: 425px) {
    padding: 30px 20px;
  }
  // background: rgba(255,255,255,1);
  // background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgb(194, 245, 255) 100%);
  // background: rgb(1,255,0);
  // background: radial-gradient(circle, rgba(1,255,0,1) 0%, rgba(255,255,255,1) 21%, rgba(255,255,255,1) 100%, rgba(1,255,0,1) 100%);
}

</style>
