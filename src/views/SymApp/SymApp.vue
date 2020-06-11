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
import Config from '../../common/indexKey.config';

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
      return Math.floor(this.getGameKey(Config.DIFFICUTY) / 2);
    },
    x() {
      return {
        value: this.createValue(Config.X1, Config.X_SYMBOL),
        symbol: this.createSymbol(Config.X1, Config.X_SYMBOL)
      };
    },
    y() {
      return {
        value: this.createValue(Config.Y1, Config.Y_SYMBOL),
        symbol: this.createSymbol(Config.Y1, Config.Y_SYMBOL)
      };
    },
    z() {
      return {
        value: this.createValue(Config.Z1, Config.Z_SYMBOL),
        symbol: this.createSymbol(Config.Z1, Config.Z_SYMBOL)
      };
    },
  },
  methods: {
    setGame() {
      let initgameKey;
      do {
        initgameKey = Math.random().toString().split('.')[1]; //DXXYYZZABC
        console.log(initgameKey);
      } while (initgameKey.slice(Config.X1, Config.X2 + 1) === '00'
      || initgameKey.slice(Config.Y1, Config.X2 + 1) === '00'
      || initgameKey.slice(Config.Z1, Config.Z2 + 1) === '00');
      this.gameKey = initgameKey;
    },
    getGameKey(index) {
      return this.gameKey[index];
    },
    createValue(varIndex, symbolIndex) {
      let value = this.getGameKey(varIndex);
      let randomNum = parseInt(this.getGameKey(symbolIndex));
      let doubleDifficulty = parseInt(this.getGameKey(Config.DIFFICUTY));
      // maxRandom + maxDifficulty = 9 + 9
      // then 18's going to create number 3-
      if (randomNum + doubleDifficulty > 14) {
        value = '3' + value;
      } else if (randomNum + doubleDifficulty > 12) {
        value = '2' + value;
      } else if (randomNum + doubleDifficulty > 9) {
        value = '1' + value;
      }
      value = value !== '0' ? value : this.getGameKey(varIndex + 1);
      // return random(0 - 39) by difficulty;
      return parseInt(value);
    },
    createSymbol(varIndex, symbolIndex) {
      return parseInt(this.getGameKey(varIndex) + this.getGameKey(symbolIndex));
    }
  },
}
</script>

<style scoped>

</style>