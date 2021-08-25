<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import lang from '@/lang';
import { computed, defineComponent } from 'vue';
import { store } from './store';
export default defineComponent({
  setup() {
    const locale = computed(() => {
      let storeLang = store.state.setting.settingCfg.lang;
      if (storeLang) {
        return lang[storeLang];
      } else {
        return lang.zhcn;
      }
    });
    return { locale };
  }
});
</script>
