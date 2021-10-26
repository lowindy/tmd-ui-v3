<template>
  <el-menu router :collapse="isCollapse" :default-active="defaultActive" :collapse-transition="false">
    <template v-for="val in menuList">
      <el-sub-menu :index="val.path" v-if="val.children && childrenShow(val.children) > 0 && val.meta.isShow" :key="val.path">
        <template #title>
          <i :class="val.meta.icon" v-if="val.meta.icon"></i>
          <SvgIcon name="home" v-else-if="val.meta.svg" />
          <i v-else class="noneIcon"></i>
          <span>{{ val.meta.title }}</span>
        </template>
        <SubItem :chil="val.children" />
      </el-sub-menu>

      <el-menu-item :index="val.path" :key="val.path" v-if="(!val.children || childrenShow(val.children) === 0) && val.meta.isShow">
        <i :class="val.meta.icon" v-if="val.meta.icon"></i>
        <SvgIcon name="home" v-else-if="val.meta.svg" />
        <i v-else class="noneIcon"></i>
        <template #title v-if="!val.meta.isLink">
          <span>{{ val.meta.title }}</span>
        </template>
        <template #title v-else>
          <a :href="val.meta.isLink" target="_blank">
            {{ val.meta.title }}
          </a>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { AppRouteRecordRaw } from '@/types/storeDto/route';
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import SubItem from './subItem.vue';

export default defineComponent({
  components: { SubItem },
  setup() {
    const store = useStore();
    const route = useRoute();
    const isCollapse = computed(() => {
      return store.state.setting.settingCfg.isCollapse;
    });
    const defaultActive = computed(() => {
      let path: string = route.path;
      if (route.meta && route.meta.activePath) {
        path = route.meta.activePath as string;
      }
      return path;
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
    const menuList = computed(() => {
      return store.state.routesList.routesList;
    });
    return { menuList, defaultActive, isCollapse, childrenShow };
  },
});
</script>
