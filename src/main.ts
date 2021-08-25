import { createApp } from 'vue';
import router from './router';
import { store, key } from './store';
import ElementPlus from 'element-plus';
import i18n from './lang/il8n';
import SvgIcon from '@/icons/index';
import GlobalCpt from '@/components/global/index';
import 'element-plus/lib/theme-chalk/index.css';
import 'remixicon/fonts/remixicon.css';
import '@/assets/style/base/index.scss';
import App from './App.vue';
const app = createApp(App);
app.use(store, key).use(SvgIcon).use(GlobalCpt);

// 初始化配置
store.dispatch('theme/getColorAction');
store.dispatch('theme/getThemeAction');
store.dispatch('setting/getCollapseAction');
store.dispatch('setting/getLangAction');
store.dispatch('setting/getCptSizeAction');
store.dispatch('setting/getRadiusAction');
app.use(ElementPlus, { i18n: i18n.global.t, size: store.state.setting.settingCfg.cptSize });
app.use(i18n).use(router).mount('#app');
