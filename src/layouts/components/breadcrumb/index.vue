<template>
  <div class="breadcrumb-bar">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.meta.title + index">
        <span v-if="index === breadcrumbList.length - 1" class="layout-navbars-breadcrumb-span">
          {{ item.meta.title }}
        </span>
        <a v-else @click.prevent="goRoute(item)">
          {{ item.meta.title }}
        </a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts">
import { AppRouteRecordRaw } from '@/types/storeDto/route';
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute, useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      breadcrumbList: [] as RouteLocationNormalized[]
    });
    const goRoute = (route: AppRouteRecordRaw) => {
      const { redirect, path, children } = route;
      if (redirect) {
        router.push(redirect);
        return;
      }
      if (children && children.length > 0) {
        router.push(children[0].path);
        return;
      }
      router.push(path);
    };
    const getBreadcrumb = (toRoute: RouteLocationNormalized) => {
      const matched = toRoute.matched;
      state.breadcrumbList = [] as RouteLocationNormalized[];
      if (matched && matched.length > 0) {
        matched.forEach((e: any) => {
          if (!e.meta.hiddenBreadcrumb) {
            state.breadcrumbList.push(e);
          }
        });
      }
    };
    // 页面加载时
    onMounted(() => {
      getBreadcrumb(route);
    });
    // 路由更新时
    onBeforeRouteUpdate((to) => {
      getBreadcrumb(to);
    });
    return {
      goRoute,
      ...toRefs(state)
    };
  }
});
</script>
