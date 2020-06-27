<template>
  <div class='symbols-container'>
    <ActiveSymbols :icon="x.symbol" />
    <ActiveSymbols :icon="y.symbol" />
    <ActiveSymbols :icon="z.symbol" />
    <ActiveSymbols :icon="z.symbol" />
    <ActiveSymbols :icon="y.symbol" />
    <ActiveSymbols :icon="z.symbol" />
    <ActiveSymbols :icon="x.symbol" />
  </div>
</template>

<script>
import ActiveSymbols from '../../components/ActiveSymbols'

export default {
  name: 'SymAnswer',
  components: {
    ActiveSymbols
  },
  props: {
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
  }
}
</script>

<style lang='less' scoped>

.symbols-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 30px 5px;
  @media (min-width: 425px) {
    padding: 30px 20px;
  }
  // background: rgba(255,255,255,1);
  // background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgb(194, 245, 255) 100%);
  // background: rgb(1,255,0);
  // background: radial-gradient(circle, rgba(1,255,0,1) 0%, rgba(255,255,255,1) 21%, rgba(255,255,255,1) 100%, rgba(1,255,0,1) 100%);
}

</style>
