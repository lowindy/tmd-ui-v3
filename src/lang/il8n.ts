import { store } from '@/store';
import { createI18n } from 'vue-i18n';
import messages from './index';
const i18n = createI18n({
  locale: store.state.setting.settingCfg.lang,
  messages
});
export default i18n;
