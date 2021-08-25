<template>
  <template v-for="val in chils">
    <el-submenu :index="val.path" :key="val.path" v-if="val.children && childrenShow(val.children) > 0 && val.meta.isShow">
      <template #title>
        <i :class="val.meta.icon" v-if="val.meta.icon"></i>
        <SvgIcon name="home" v-else-if="val.meta.svg" />
        <i v-else class="noneIcon"></i>
        <span>{{ val.meta.title }}</span>
      </template>
      <sub-item :chil="val.children" />
    </el-submenu>
    <el-menu-item :index="val.path" :key="val.path" v-if="(!val.children || childrenShow(val.children) === 0) && val.meta.isShow">
      <template v-if="!val.meta.isLink">
        <i :class="val.meta.icon" v-if="val.meta.icon"></i>
        <SvgIcon name="home" v-else-if="val.meta.svg" />
        <i v-else class="noneIcon"></i>
        <span>{{ val.meta.title }}</span>
      </template>
      <template v-else>
        <a :href="val.meta.isLink" target="_blank">
          <i :class="val.meta.icon" v-if="val.meta.icon"></i>
          <SvgIcon name="home" v-else-if="val.meta.svg" />
          <i v-else class="noneIcon"></i>
          {{ val.meta.title }}
        </a>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import { AppRouteRecordRaw } from '@/types/storeDto/route';
import { computed, defineComponent } from 'vue';
export default defineComponent({
  name: 'navMenuSubItem',
  props: {
    chil: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    // 获取父级菜单数据
    const chils = computed(() => {
      return props.chil;
    });
    const childrenShow = (children: AppRouteRecordRaw[]) => {
      let result = 0;
      if (!children) {
        return result;
      }
      for (let index = 0; index < children.length; index++) {
        const c = children[index];
        if (c.meta && c.meta.isShow) {
          result++;
        }
      }
      return result;
    };
    return {
      chils,
      childrenShow
    };
  }
});
</script>
