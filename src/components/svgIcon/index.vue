<template>
  <svg aria-hidden="true" class="svg-icon-spin" :style="size > 0 ? { width: size + 'px', height: size + 'px' } : null">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number as PropType<number>,
      default: 0,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    return { symbolId };
  },
});
</script>
<style scoped>
.svg-icon-spin {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
