import { getlocalStorage, setlocalStorage } from '@/utils/helper';
import { RootStateTypes } from '@/types/storeDto';
import { langEnum, SettingState } from '@/types/storeDto/setting';
import { Module } from 'vuex';

const SettingModule: Module<SettingState, RootStateTypes> = {
  namespaced: true,
  state: {
    settingCfg: {
      isCollapse: false,
      lang: langEnum.ZHCN,
    },
  },
  mutations: {
    setCollapse(state: SettingState, isCollapse: boolean) {
      state.settingCfg.isCollapse = isCollapse;
    },
    setLang(state: SettingState, lang: langEnum) {
      state.settingCfg.lang = lang;
    },
  },
  actions: {
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
    },
  },
};

export default SettingModule;
