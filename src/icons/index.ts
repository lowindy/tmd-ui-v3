import { createApp } from 'vue';

import SvgIcon from '@/components/svgIcon/index.vue'; // 引入自定义组件

const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
const req = require.context('./svgs', false, /\.svg$/);
requireAll(req);

export default {
  install: function (app: ReturnType<typeof createApp>): void {
    app.component('SvgIcon', SvgIcon);
  }
};
