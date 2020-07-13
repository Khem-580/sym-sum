<template>
  <div class="circle-answer" :class="classes" @click="$emit('emitClick')">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CircleAnswer',
  props: {
    classes: {
      type: Object,
      required: false,
    }
  },
}
</script>

<style lang="less" scoped>
@import '../less/animation';
@import '../less/global-var';
.set-symbolClickColor;
.set-circleWarningColor;

.circle-answer {
  cursor: pointer;
  user-select: none;
  margin: 0 auto;
  border-radius: 50%;
  text-align: center;
  line-height: 68px;
  width: 68px;
  height: 68px;
  font-size: 1.6em;
  background-color: white;
  color: @symbolClickColor;
  border: 5px solid @symbolClickColor;
  font-weight: 600;
  margin-top: 0.5em;
  @media (min-width: 768px) {
    line-height: 108px;
    width: 108px;
    height: 108px;
    font-size: 2.6em;
  }
}

.init {
  .animate_roll_2();
}

.warning {
  color: @circleWarningColor;
  border-color: @circleWarningColor;
}

.default {
  background: @symbolClickColor;
  color:white;
}

.correct-answer {
  background: @symbolClickColor;
  color:white;
  .animate_unroll();
}

.wrong-answer {
  color:red;
  border-color: transparent;
  .animate_unroll_2();
}

</style>