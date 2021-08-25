import { getlocalStorage, setlocalStorage } from '@/utils/helper';
import { RootStateTypes } from '@/types/storeDto';
import { cptSizeEnum, langEnum, radiusSizeEnum, SettingState } from '@/types/storeDto/setting';
import { Module } from 'vuex';

const SettingModule: Module<SettingState, RootStateTypes> = {
  namespaced: true,
  state: {
    settingCfg: {
      isCollapse: false,
      lang: langEnum.ZHCN,
      cptSize: cptSizeEnum.Default,
      radiusSize: radiusSizeEnum.Default
    }
  },
  mutations: {
    setRadiusSize(state: SettingState, radiusSize: radiusSizeEnum) {
      state.settingCfg.radiusSize = radiusSize;
      document.documentElement.style.setProperty('--border-radius', radiusSize);
    },
    setCptSize(state: SettingState, cptSize: cptSizeEnum) {
      state.settingCfg.cptSize = cptSize;
    },
    setCollapse(state: SettingState, isCollapse: boolean) {
      state.settingCfg.isCollapse = isCollapse;
    },
    setLang(state: SettingState, lang: langEnum) {
      state.settingCfg.lang = lang;
    }
  },
  actions: {
    // 设置圆角
    setRadiusAction({ commit }, radiusSize: radiusSizeEnum) {
      setlocalStorage('radiusSize', radiusSize);
      commit('setRadiusSize', radiusSize);
    },
    getRadiusAction({ commit }) {
      const setRadiusSize = getlocalStorage('radiusSize');
      commit('setRadiusSize', setRadiusSize || radiusSizeEnum.Default);
    },
    // element 组件大小
    setCptSizeAction({ commit }, cptSize: cptSizeEnum) {
      setlocalStorage('cptSize', cptSize);
      commit('setCptSize', cptSize);
    },
    getCptSizeAction({ commit }) {
      const setCptSize = getlocalStorage('cptSize');
      commit('setCptSize', setCptSize || '');
    },
    // 国际化
    setlangAction({ commit }, lang: langEnum) {
      setlocalStorage('lang', lang);
      commit('setLang', lang);
    },
    getLangAction({ commit }) {
      const lang = getlocalStorage('lang');
      commit('setLang', lang || langEnum.ZHCN);
    },
    // aside collapse
    setCollapseAction({ commit }, isCollapse: boolean) {
      setlocalStorage('collapse', isCollapse ? 'true' : 'false');
      commit('setCollapse', isCollapse);
    },
    getCollapseAction({ commit }) {
      const collapse = getlocalStorage('collapse');
      commit('setCollapse', collapse === 'true');
    }
  }
};

export default SettingModule;
