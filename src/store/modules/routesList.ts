import { RootStateTypes } from '@/types/storeDto';
import { RoutesListState } from '@/types/storeDto/route';
import { Module } from 'vuex';

const RoutesListModule: Module<RoutesListState, RootStateTypes> = {
  namespaced: true,
  state: {
    routesList: []
  },
  mutations: {
    // 设置路由，菜单中使用到
    setRoutesList(state: any, data: RoutesListState) {
      state.routesList = data;
    }
  },
  actions: {
    // 设置路由，菜单中使用到
    async setRoutesAction({ commit }, data: RoutesListState) {
      commit('setRoutesList', data);
    }
  }
};

export default RoutesListModule;
