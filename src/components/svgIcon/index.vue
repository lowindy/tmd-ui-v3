<template>
  <svg class="svg-icon" aria-hidden="true" :style="iconSize > 0 ? { width: iconSize + 'px', height: iconSize + 'px' } : null">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script lang="ts">
interface SvgIconProps {
  iconClass: string;
  size: number;
}
import { computed, defineComponent, PropType } from 'vue';
export default defineComponent({
  props: {
    iconClass: {
      type: String as PropType<string>,
      required: true
    },
    size: {
      type: Number as PropType<number>,
      default: 0
    }
  },
  setup(props: SvgIconProps) {
    const iconName = computed(() => `#icon-${props.iconClass}`);
    const iconSize = computed(() => props.size);
    return { iconName, iconSize };
  }
});
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
