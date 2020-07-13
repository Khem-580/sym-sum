import { RANDOM_COLOR, RESET_COLOR, SPLICE_COLOR, GAMEKEY_GENERATOR } from '../mutations';
import { INDEX_KEY, LAST_DIGIT } from '../../common/config';

const initState = () => { 
  return {
    storeColor: initStoreColor(),
    gameKey: '',
  }
};

const initStoreColor = () => [
  'rgba(111, 191, 76, 1)',
  'rgba(255, 165, 0, 1)',
  'rgba(62, 158, 230, 1)',
]

export default {
  namespaced: true,
  state: initState(),
  mutations: {
    [RANDOM_COLOR](state) {
      state.storeColor.sort(() => Math.random() - 0.5);
    },
    [SPLICE_COLOR](state, color) {
      const indexColor = state.storeColor.indexOf(color);
      state.storeColor.splice(indexColor, 1);
    },
    [GAMEKEY_GENERATOR](state) {
      let initgameKey;
      let isFalseGameKey;
      do {
        initgameKey = Math.random().toString().split('.')[1]; //DXXYYZZABC
        console.log(initgameKey);
        let symbolX = initgameKey[INDEX_KEY.X1] + initgameKey[INDEX_KEY.X_SYMBOL];
        let symbolY = initgameKey[INDEX_KEY.Y1] + initgameKey[INDEX_KEY.Y_SYMBOL];
        let symbolZ = initgameKey[INDEX_KEY.Z1] + initgameKey[INDEX_KEY.Z_SYMBOL];
        let isSameSymbol = symbolX === symbolY || symbolY === symbolZ || symbolX === symbolZ;
        let isLastDigitUndefined = typeof initgameKey[LAST_DIGIT] === 'undefined';
        let isDoubleZero = initgameKey.slice(INDEX_KEY.X1, INDEX_KEY.X2 + 1) === '00'
        || initgameKey.slice(INDEX_KEY.Y1, INDEX_KEY.Y2 + 1) === '00'
        || initgameKey.slice(INDEX_KEY.Z1, INDEX_KEY.Z2 + 1) === '00';
        isFalseGameKey = isSameSymbol || isDoubleZero || isLastDigitUndefined;
      } while (isFalseGameKey);
      state.gameKey = initgameKey;
    },
    [RESET_COLOR](state) {
      Object.assign(state.storeColor, initStoreColor());
    }
  },
  getters: {
    getGameKey: state => index => {
      return String(state.gameKey[index]);
    },
    difficulty(_state, getter) {
      // level 0-4
      return getter.getGameKey(INDEX_KEY.DIFFICUTY) % 5;
    },
    x(_state, getter) {
      return {
        value: getter.createValue(INDEX_KEY.X1, INDEX_KEY.X_SYMBOL),
        symbol: getter.createSymbol(INDEX_KEY.X1, INDEX_KEY.X_SYMBOL)
      };
    },
    y(_state, getter) {
      return {
        value: getter.createValue(INDEX_KEY.Y1, INDEX_KEY.Y_SYMBOL),
        symbol: getter.createSymbol(INDEX_KEY.Y1, INDEX_KEY.Y_SYMBOL)
      };
    },
    z(_state, getter) {
      return {
        value: getter.createValue(INDEX_KEY.Z1, INDEX_KEY.Z_SYMBOL),
        symbol: getter.createSymbol(INDEX_KEY.Z1, INDEX_KEY.Z_SYMBOL)
      };
    },
    createValue: (_state, getter) => (varIndex, symbolIndex) => {
      let value = getter.getGameKey(varIndex);
      let randomNum = parseInt(getter.getGameKey(symbolIndex));
      let doubleDifficulty = parseInt(getter.getGameKey(INDEX_KEY.DIFFICUTY));
      // maxRandom + maxDifficulty = 9 + 9
      // then 18's going to create number 3-
      if (randomNum + doubleDifficulty > 14) {
        value = '3' + value;
      } else if (randomNum + doubleDifficulty > 12) {
        value = '2' + value;
      } else if (randomNum + doubleDifficulty > 9) {
        value = '1' + value;
      }
      value = value !== '0' ? value : getter.getGameKey(varIndex + 1);
      // return random(0 - 39) by difficulty;
      return parseInt(value);
    },
    createSymbol: (_state, getter) => (varIndex, symbolIndex) => {
      return getter.getGameKey(varIndex) + getter.getGameKey(symbolIndex);
    },
  }
  // actions
}