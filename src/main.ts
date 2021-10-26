import { createApp } from 'vue';
import router from './router';
import { store, key } from './store';
// import ElementPlus from 'element-plus';
import i18n from './lang/il8n';
import 'virtual:svg-icons-register';
import GlobalCpt from '@/components/global/index';
import 'element-plus/dist/index.css';
import 'remixicon/fonts/remixicon.css';
import '@/assets/style/base/index.scss';
import App from './App.vue';
const app = createApp(App);
app.use(store, key).use(GlobalCpt);

// 初始化配置
store.dispatch('theme/getColorAction');
store.dispatch('theme/getThemeAction');
store.dispatch('setting/getCollapseAction');
store.dispatch('setting/getLangAction');
store.dispatch('theme/getCptSizeAction');
store.dispatch('theme/getRadiusAction');
app.config.globalProperties.$ELEMENT = {
  size: store.state.theme.cptSize,
};
app.use(i18n).use(router).mount('#app');
