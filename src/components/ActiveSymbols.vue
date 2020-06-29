<template>
  <div class="active-symbols" @click="$emit('emitClick', pos)">
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
@import '../less/global-var.less';

@shrinkScale: 0.8;

.active-symbols {
  cursor: pointer;
  user-select: none;
  .animate_filp;
  .tease();
  // background: rgba(255,255,255,1);
  // background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgb(194, 245, 255) 100%);
  // background: rgb(1,255,0);
  // background: radial-gradient(circle, rgba(1,255,0,1) 0%, rgba(255,255,255,1) 70%, rgba(255,255,255,1) 100%, rgba(1,255,0,1) 100%);
}

.tease() {
  .set-randomNumber(180, 360, 1);
  .animate_rotate(@randomNumber);
}

.selected {
  .set-symbolClickColor();
  background: @symbolClickColor;
  .animate_shrink(@shrinkScale);
}

.unselected {
  background: transparent;
  .animate_unshrink(@shrinkScale);
}
</style>
