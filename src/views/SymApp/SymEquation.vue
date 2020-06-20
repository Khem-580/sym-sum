<script>
import Equation from '../../components/Equation.vue'

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
  render() {
    return (
      <div class="whiteBoard">
        { this.equationSlotedRandom.map((Vnode) => Vnode) }
      </div>
    );
  },
  computed: {
    equations() {
      return {
        0: [
          <Equation a={this.x} />, 
          <Equation a={this.y} />, 
          <Equation a={this.z} />
        ],
        1: [
          <Equation a={this.x} />,
          <Equation a={this.y} />,
          <Equation a={this.y} b={this.z} />
        ],
        2: [
          <Equation a={this.x} />,
          <Equation a={this.y} b={this.x} />,
          <Equation a={this.z} b={this.y} />
        ],
        3: [
          <Equation a={this.x} b={this.y} c={this.z} />,
          <Equation a={this.z} b={this.y} />,
          <Equation a={this.x} />
        ],
        4: [
          <Equation a={this.x} b={this.y} c={this.z} />,
          <Equation a={this.y} b={this.x} />,
          <Equation a={this.x} b={this.z} />
        ],
      }
    },
    equationSlotedRandom() {
      return [...this.equations[this.difficulty]].sort(() => this.randomNumber);
    },
    randomNumber() {
      let randomNum = this.x.symbol - this.y.symbol;
      return randomNum;
    }
  }
}
</script>

<style scoped>
.whiteBoard {
  background: linear-gradient(to bottom,  #ffffff 0%,#f3f3f3 50%,#ededed 51%,#ffffff 100%);
  padding: 10px 0px;
}
</style>