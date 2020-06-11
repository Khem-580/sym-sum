<template>
  <div>
    <div class="_container">
      <Header />
      {{ gameKey }} <br />
      d = {{ difficulty }} <br /><br />
      x = {{ x.value }} <br />
      x.symbol = {{ x.symbol }} <br /><br />
      y = {{ y.value }} <br />
      y.symbol = {{ y.symbol }} <br /><br />
      z = {{ z.value }} <br />
      z.symbol = {{ z.symbol }}
    </div>
  </div>
</template>

<script>
import Header from '../Header.vue';

export default {
  name: "SymApp",
  components: {
    Header
  },
  mounted() {
    this.setGame();
  },
  data() {
    return {
      gameKey: String,
    }
  },
  computed: {
    difficulty() {
      // level 0-4
      return Math.floor(this.getGameKey(0) / 2);
    },
    x() {
      // difficuty less than 4
      return {
        value: this.setVariable2Number(1,7),
        symbol: this.getGameKey(1) + this.getGameKey(7)
      };
    },
    y() {
      return {
        value: this.setVariable2Number(3,8),
        symbol: this.getGameKey(3) + this.getGameKey(8)
      };
    },
    z() {
      return {
        value: this.setVariable2Number(5,9),
        symbol: this.getGameKey(5) + this.getGameKey(9)
      };
    },
  },
  methods: {
    setGame() {
      let initgameKey; //0.DXXYYZZABC
      do {
        initgameKey = Math.random().toString().split('.')[1]; //DXXYYZZABC
        console.log(initgameKey);
      } while (initgameKey.slice(1, 3) === '00'
      || initgameKey.slice(3, 5) === '00'
      || initgameKey.slice(5, 7) === '00');
      this.gameKey = initgameKey;
    },
    getGameKey(index) {
      return this.gameKey[index];
    },
    setVariable2Number(varIndex, symbolIndex) {
      // difficulty 2
      // 60% --> 0X
      // 30% --> 1X
      // 10% --> 2X
      let placeProb = this.getGameKey(symbolIndex);
      let outNumber = this.getGameKey(varIndex) !== '0' ? this.getGameKey(varIndex) : this.getGameKey(varIndex + 1);
      if (placeProb > 14 - (2 * this.difficulty)) {
        outNumber = '3' + outNumber;
      } else if (placeProb > 12 - (2 * this.difficulty)) {
        outNumber = '2' + outNumber;
      } else if (placeProb > 9 - (2 * this.difficulty)) {
        outNumber = '1' + outNumber;
      }
      return outNumber;
    },
  },
}
</script>

<style scoped>

</style>