import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import routesList from '@/store/modules/routesList';
import setting from '@/store/modules/setting';
import theme from '@/store/modules/theme';
import member from '@/store/modules/member';
import { AllStateTypes, RootStateTypes } from '@/types/storeDto';

export const key: InjectionKey<Store<RootStateTypes>> = Symbol();

export const store = createStore<RootStateTypes>({
  modules: {
    setting,
    routesList,
    theme,
    member,
  },
});
export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key);
}
