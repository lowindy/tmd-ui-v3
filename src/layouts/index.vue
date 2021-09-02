<template>
  <div class="layout-container" :class="{ 'collapse-sidebar': isCollapse }">
    <div class="layout-left">
      <div class="layout-sidebar">
        <Logo />
        <Sidebar />
      </div>
    </div>
    <div class="layout-right">
      <div class="layout-head">
        <Headbar />
        <Tags />
      </div>
      <router-view v-slot="{ Component }">
        <transition name="el-fade-in" mode="out-in">
          <div class="layout-main">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Tags from './components/tags/index.vue';
import Sidebar from './components/sidebar/index.vue';
import Headbar from './components/headbar/index.vue';
import Logo from './components/logo/index.vue';
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
export default defineComponent({
  name: 'layoutDefaults',
  components: { Sidebar, Headbar, Logo, Tags },
  setup() {
    const store = useStore();
    const isCollapse = computed(() => {
      return store.state.setting.settingCfg.isCollapse;
    });
    return { isCollapse };
  },
});
</script>
<style lang="scss" scoped>
.container-main {
  display: flex;
  flex-direction: column;
}
</style>
