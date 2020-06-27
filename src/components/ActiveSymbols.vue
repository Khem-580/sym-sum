<template>
  <div class="activeSymbols" @click="$emit('emitClick', pos)">
    <span v-if="!src" class="_icon" :class="selected ? 'selected': 'unselected'" v-html="utfSymbol" />
    <img v-else :src="src" />
  </div>
</template>

<script>
import Symbols from '../components/Symbols';

export default {
  name: "SymbolsActive",
  extends: Symbols,
  props: {
    pos: {
      type: Number,
      required: true,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
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