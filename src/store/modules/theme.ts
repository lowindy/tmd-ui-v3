import { getlocalStorage, setlocalStorage } from '@/utils/helper';
import { getLightColor } from '@/utils/theme';
import { RootStateTypes } from '@/types/storeDto';
import { cptSizeEnum, radiusSizeEnum, themeEnum, ThemeState } from '@/types/storeDto/theme';
import { Module } from 'vuex';
import { defaultCfg } from '@/config/default';

const ThemeModule: Module<ThemeState, RootStateTypes> = {
  namespaced: true,
  state: {
    theme: 'default',
    color: '#409eff',
    cptSize: cptSizeEnum.Default,
    radiusSize: radiusSizeEnum.Default,
  },
  mutations: {
    setRadiusSize(state: ThemeState, radiusSize: radiusSizeEnum) {
      state.radiusSize = radiusSize;
      document.documentElement.style.setProperty('--border-radius', radiusSize);
    },
    setCptSize(state: ThemeState, cptSize: cptSizeEnum) {
      state.cptSize = cptSize;
    },
    setTheme(state: ThemeState, theme: themeEnum) {
      state.theme = theme;
      document.body.className = `theme-${state.theme}`;
    },
    setColor(state: ThemeState, color: string) {
      state.color = color;
      const propText = 'primary';
      document.documentElement.style.setProperty(`--color-${propText}`, color);
      for (let i = 1; i <= 9; i++) {
        const lightColor = getLightColor(color, i / 10);
        document.documentElement.style.setProperty(`--color-${propText}-light-${i}`, lightColor || '');
      }
    },
  },
  actions: {
    // 设置圆角
    setRadiusAction({ commit }, radiusSize: radiusSizeEnum) {
      setlocalStorage('radiusSize', radiusSize);
      commit('setRadiusSize', radiusSize);
    },
    getRadiusAction({ commit }) {
      const setRadiusSize = getlocalStorage('radiusSize');
      commit('setRadiusSize', setRadiusSize || defaultCfg.radiusSize);
    },
    // element 组件大小
    setCptSizeAction({ commit }, cptSize: cptSizeEnum) {
      setlocalStorage('cptSize', cptSize);
      commit('setCptSize', cptSize);
    },
    getCptSizeAction({ commit }) {
      const setCptSize = getlocalStorage('cptSize');
      commit('setCptSize', setCptSize || defaultCfg.cptSize);
    },
    // 设置风格
    setThemeAction({ commit }, theme: themeEnum) {
      setlocalStorage('theme', theme);
      commit('setTheme', theme);
    },
    getThemeAction({ commit }) {
      const theme = getlocalStorage('theme');
      if (theme && theme.length > 0) {
        commit('setTheme', theme);
      } else {
        commit('setTheme', defaultCfg.theme);
      }
    },
    setColorAction({ commit }, color: string) {
      setlocalStorage('color', color);
      commit('setColor', color);
    },
    getColorAction({ commit }) {
      const color = getlocalStorage('color');
      if (color && color.length > 0) {
        commit('setColor', color);
      } else {
        commit('setColor', defaultCfg.color);
      }
    },
  },
};

export default ThemeModule;
