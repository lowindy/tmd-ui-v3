import { getlocalStorage, setlocalStorage } from '@/utils/helper';
import { getLightColor } from '@/utils/theme';
import { RootStateTypes } from '@/types/storeDto';
import { themeEnum, ThemeState } from '@/types/storeDto/theme';
import { Module } from 'vuex';

const ThemeModule: Module<ThemeState, RootStateTypes> = {
  namespaced: true,
  state: {
    theme: 'defalut',
    color: '#409EFF',
  },
  mutations: {
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
    setThemeAction({ commit }, theme: themeEnum) {
      setlocalStorage('theme', theme);
      commit('setTheme', theme);
    },
    getThemeAction({ commit }) {
      const theme = getlocalStorage('theme');
      if (theme && theme.length > 0) {
        commit('setTheme', theme);
      } else {
        commit('setTheme', 'default');
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
        commit('setColor', '#409EFF');
      }
    },
  },
};

export default ThemeModule;
