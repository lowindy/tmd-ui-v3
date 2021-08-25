/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // configureWebpack: (config) => {
  //   if (process.env.NODE_ENV !== 'production') {
  //     config.devtool = 'eval-source-map';
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js');
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.exclude.add(/node_modules/);
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });

    const imagesRule = config.module.rule('images');
    imagesRule.exclude.add(resolve('src/assets/icons'));
    config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
  },
  devServer: {
    proxy: process.env.VUE_APP_API_ADDR
  }
};