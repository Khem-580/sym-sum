<template>
  <div class="_container">
    <Header />
    <SymEquation />
    <SymAnswer />
    <div @click="resetTest">
      BUTTON
    </div>
    <br />
    <br />
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
import { mapMutations, mapGetters } from 'vuex';
import { GAMEKEY_GENERATOR } from '../../store/mutations';
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
    this.resetTest();
  },
  computed: {
    ...mapGetters({
      x: `symAppStore/x`,
      y: `symAppStore/y`,
      z: `symAppStore/z`,
      difficulty: `symAppStore/difficulty`,
    }),
  },
  methods: {
    resetTest() {
      this.gameKeyGenerator();
    },
    ...mapMutations({
      gameKeyGenerator: `symAppStore/${GAMEKEY_GENERATOR}`
    }),
  },
}
</script>

<style></style>
