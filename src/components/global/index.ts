import { createApp } from 'vue';
import pageNav from '@/layouts/components/pageNav/index.vue';
export default {
  install: function (app: ReturnType<typeof createApp>): void {
    app.component('PageNav', pageNav);
  }
};
