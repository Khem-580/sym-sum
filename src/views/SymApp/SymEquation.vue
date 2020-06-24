<script>
import { mapMutations } from 'vuex';
import { RESET_COLOR } from '../../store/mutations';
import Equation from '../../components/Equation.vue';

export default {
  name: "SymEquation",
  components: {
    Equation,
  },
  props: {
    difficulty: {
      type: Number,
      required: true,
    },
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
  mounted() {
    this.resetColor();
  },
  render() {
    return (
      <div class="whiteBoard" onClick={ () => this.resetColor() }>
        { this.equationSlotedRandom.map((Vnode) => Vnode) }
      </div>
    );
  },
  computed: {
    equationSlotedRandom() {
      return this.equations(this.difficulty).sort(() => this.randomNumber);
    },
    randomNumber() {
      let randomNum = this.x.symbol - this.y.symbol;
      return randomNum;
    },
  },
  methods: {
    ...mapMutations({
      resetColor: `symAppStore/${RESET_COLOR}`,
    }),
    equations(difficulty) {
      let jsxArr;
      switch (difficulty) {
        case 0: jsxArr = [
            <Equation a={this.x} />, 
            <Equation a={this.y} />, 
            <Equation a={this.z} />
          ];
          break;
        case 1: jsxArr = [
            <Equation a={this.x} />,
            <Equation a={this.y} />,
            <Equation a={this.y} b={this.z} />
          ];
          break;
        case 2: jsxArr = [
            <Equation a={this.x} />,
            <Equation a={this.y} b={this.x} />,
            <Equation a={this.z} b={this.y} />
          ];
          break;
        case 3: jsxArr = [
            <Equation a={this.x} b={this.y} c={this.z} />,
            <Equation a={this.z} b={this.y} />,
            <Equation a={this.x} />
          ];
          break;
        default: jsxArr = [
            <Equation a={this.x} b={this.y} c={this.z} />,
            <Equation a={this.y} b={this.x} />,
            <Equation a={this.x} b={this.z} />
          ];
          break;
      }
      return jsxArr;
    },
  }
}
</script>

<style scoped>
.whiteBoard {
  background: linear-gradient(to bottom,  #ffffff 0%,#f3f3f3 50%,#ededed 51%,#ffffff 100%);
  padding: 10px 0px;
}
</style>