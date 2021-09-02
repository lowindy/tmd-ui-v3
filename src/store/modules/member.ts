import { RootStateTypes } from '@/types/storeDto';
import { MemberState } from '@/types/storeDto/member';
import { Module } from 'vuex';

const MemberModule: Module<MemberState, RootStateTypes> = {
  namespaced: true,
  state: {
    userName: '',
    avatar: '',
    logined: false,
    loaded: false,
  },
  mutations: {
    getMemberInfo(state: MemberState) {
      state.userName = '管理员';
      state.logined = true;
      state.loaded = true;
    },
  },
  actions: {
    getMemberInfoAction({ commit }) {
      commit('getMemberInfo');
    },
  },
};

export default MemberModule;
