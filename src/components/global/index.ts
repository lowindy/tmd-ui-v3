import { createApp } from 'vue';
import pageNav from '@/layouts/components/pageNav/index.vue';
import svgIcon from '@/components/svgIcon/index.vue';
export default {
  install: function (app: ReturnType<typeof createApp>): void {
    app.component('PageNav', pageNav);
    app.component('SvgIcon', svgIcon);
  },
};
