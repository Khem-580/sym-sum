<template>
  <div class="activeSymbols">
    <span v-if="!src" class="_icon" :class="isSelected ? 'selected': 'unselected'" v-html="utfSymbol" @click="clickHandler" />
    <img v-else :src="src" />
  </div>
</template>

<script>
import Symbols from '../components/Symbols';

export default {
  name: "SymbolsActive",
  extends: Symbols,
  data() {
    return {
      isSelected: false,
    }
  },
  computed: {

  },
  methods: {
    clickHandler() {
      this.isSelected = !this.isSelected;
      return this.isSelected;
    }
  }
}
</script>

<style lang="less" scoped>

@import '../less/animation.less';
@shrinkScale: 0.8;

  .activeSymbols {
    cursor: pointer;
    user-select: none;
    .animate_filp();
  }

  ._icon {
    box-shadow: 0px 0px 0px #ffffff;
  }

  .selected {
    background: #3390FF;
    .animate_shrink(@shrinkScale);
  }
  
  .unselected {
    background: #FFFFFF;
    .animate_unshrink(@shrinkScale);
  }
</style>