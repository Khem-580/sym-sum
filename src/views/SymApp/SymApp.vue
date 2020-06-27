<template>
  <div class="_container">
    <Header />
    <SymEquation :difficulty=difficulty :x=x :y=y :z=z />
    <SymAnswer :x=x :y=y :z=z />
    <br />
    <br />
    {{ gameKey }} <br />
    d = {{ difficulty }} <br /><br />
    x = {{ x.value }} <Symbols :icon=x.symbol /> <br />
    x.symbol = {{ x.symbol }} <br /><br />
    y = {{ y.value }} <Symbols :icon=y.symbol /> <br />
    y.symbol = {{ y.symbol }} <br /><br />
    z = {{ z.value }} <Symbols :icon=z.symbol /> <br />
    z.symbol = {{ z.symbol }}
  </div>
</template>

<script>
import { INDEX_KEY } from '../../common/config';
import Symbols from '../../components/Symbols.vue';
import Header from '../Header.vue';
import SymEquation from './SymEquation.vue';
import SymAnswer from './SymAnswer.vue';

export default {
  name: "SymApp",
  components: {
    Header,
    Symbols,
    SymEquation,
    SymAnswer,
  },
  created() {
    this.gameKeyGenerator();
  },
  data() {
    return {
      gameKey: String,
    }
  },
  computed: {
    difficulty() {
      // level 0-4
      return this.getGameKey(INDEX_KEY.DIFFICUTY) % 5;
    },
    x() {
      return {
        value: this.createValue(INDEX_KEY.X1, INDEX_KEY.X_SYMBOL),
        symbol: this.createSymbol(INDEX_KEY.X1, INDEX_KEY.X_SYMBOL)
      };
    },
    y() {
      return {
        value: this.createValue(INDEX_KEY.Y1, INDEX_KEY.Y_SYMBOL),
        symbol: this.createSymbol(INDEX_KEY.Y1, INDEX_KEY.Y_SYMBOL)
      };
    },
    z() {
      return {
        value: this.createValue(INDEX_KEY.Z1, INDEX_KEY.Z_SYMBOL),
        symbol: this.createSymbol(INDEX_KEY.Z1, INDEX_KEY.Z_SYMBOL)
      };
    },
  },
  methods: {
    gameKeyGenerator() {
      let initgameKey
      let isFalseGameKey;
      do {
        initgameKey = Math.random().toString().split('.')[1]; //DXXYYZZABC
        console.log(initgameKey);
        let symbolX = initgameKey[INDEX_KEY.X1] + initgameKey[INDEX_KEY.X_SYMBOL];
        let symbolY = initgameKey[INDEX_KEY.Y1] + initgameKey[INDEX_KEY.Y_SYMBOL];
        let symbolZ = initgameKey[INDEX_KEY.Z1] + initgameKey[INDEX_KEY.Z_SYMBOL];
        let isSameSymbol = symbolX === symbolY || symbolY === symbolZ || symbolX === symbolZ;
        let isLastDigitUndefined = typeof initgameKey[INDEX_KEY.LAST_DIGIT] === 'undefined';
        let isDoubleZero = initgameKey.slice(INDEX_KEY.X1, INDEX_KEY.X2 + 1) === '00'
        || initgameKey.slice(INDEX_KEY.Y1, INDEX_KEY.Y2 + 1) === '00'
        || initgameKey.slice(INDEX_KEY.Z1, INDEX_KEY.Z2 + 1) === '00';
        isFalseGameKey = isSameSymbol || isDoubleZero || isLastDigitUndefined;
      } while (isFalseGameKey);
      this.gameKey = initgameKey;
    },
    getGameKey(index) {
      return String(this.gameKey[index]);
    },
    createValue(varIndex, symbolIndex) {
      let value = this.getGameKey(varIndex);
      let randomNum = parseInt(this.getGameKey(symbolIndex));
      let doubleDifficulty = parseInt(this.getGameKey(INDEX_KEY.DIFFICUTY));
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
      return this.getGameKey(varIndex) + this.getGameKey(symbolIndex);
    }
  },
}
</script>

<style></style>
