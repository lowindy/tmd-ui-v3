<template>
  <div class="headbar">
    <div class="collapse-toggle" @click="setCollapse()">
      <i class="ri-menu-fold-line" v-show="!isCollapse"></i>
      <i class="ri-menu-unfold-line" v-show="isCollapse"></i>
    </div>
    <Breadcrumb />
    <div class="flex-1"></div>
    <div class="head-menu-btn" @click="showSettingDrawer()"><i class="ri-settings-line ri-lg"></i></div>
    <el-dropdown class="head-menu-btn" :show-timeout="70" :hide-timeout="50" trigger="click" @command="onLanguageChange">
      <span class="el-dropdown-link"> <i class="ri-translate ri-lg"></i></span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="zhcn" :disabled="lang === 'zhcn'">简体中文</el-dropdown-item>
          <el-dropdown-item command="en" :disabled="lang === 'en'">English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown class="head-menu-btn" :show-timeout="70" :hide-timeout="50" trigger="click">
      <span class="el-dropdown-link"> <el-avatar :size="30"> A </el-avatar> 管理员 <i class="el-icon-arrow-down el-icon--right"></i></span>
      <template #dropdown>
        <el-dropdown-menu>
          <!-- <el-dropdown-item>个人中心</el-dropdown-item> -->
          <el-dropdown-item @click="cmdSingout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <Setting ref="settingDrawerRef" @closeDlg="closeSettingDrawer"></Setting>
</template>

<script lang="ts">
import { useStore } from '@/store';
import Setting from './settingDrawer.vue';
import Breadcrumb from '../breadcrumb/index.vue';
import { computed, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import MemberApi from '@/api/member';
import router from '@/router';
import { ElMessage } from 'element-plus';
export default defineComponent({
  components: { Breadcrumb, Setting },
  setup() {
    const store = useStore();
    // collapse aside
    const isCollapse = computed(() => {
      return store.state.setting.settingCfg.isCollapse;
    });
    const setCollapse = () => {
      store.dispatch('setting/setCollapseAction', !isCollapse.value);
    };
    // lang
    const { locale } = useI18n();
    const lang = computed(() => {
      return store.state.setting.settingCfg.lang;
    });
    const onLanguageChange = (lang: string) => {
      store.dispatch('setting/setlangAction', lang);
      locale.value = lang;
    };
    onLanguageChange(lang.value);
    // setting drawer
    const settingDrawerRef = ref();
    const showSettingDrawer = () => {
      settingDrawerRef.value.cmdInit();
    };
    const closeSettingDrawer = () => {
      console.log('closeSettingDrawer');
    };
    const cmdSingout = async () => {
      let res = await MemberApi.signOut();
      if (res) {
        router.push({ name: 'signin' });
      } else {
        ElMessage.error('退出失败');
      }
    };
    return { isCollapse, setCollapse, lang, onLanguageChange, settingDrawerRef, showSettingDrawer, closeSettingDrawer, cmdSingout };
  },
});
</script>
