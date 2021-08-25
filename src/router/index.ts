import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { store } from '@/store/index';
const customerRoutes: Array<RouteRecordRaw> = [
  {
    path: '/layout',
    name: 'layout',
    meta: {
      hiddenBreadcrumb: true
    },
    component: () => import('@/layouts/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home.vue'),
        meta: {
          icon: 'ri-home-6-line',
          isShow: true,
          title: '工作台'
        }
      }
    ]
  }
];
const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/signin',
    name: 'signin',
    component: () => {
      return import('@/views/signin.vue');
    }
  }
];
const routes = staticRoutes.concat(customerRoutes);
fillterRouter();
function fillterRouter() {
  const showRoutes = customerRoutes[0].children;
  store.dispatch('routesList/setRoutesAction', showRoutes);
}
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
