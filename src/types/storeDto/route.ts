import { defineComponent } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

type Component<T extends any = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import('*.vue')>) | (() => Promise<T>);

interface RouteMeta {
  auth?: string[];
  icon?: string;
  svg?: string;
  isLink?: string;
  isAffix?: boolean;
  activePath?: string;
  hiddenBreadcrumb?: boolean;
  isShow: boolean;
  isKeepAlive?: boolean;
  title: string;
  roles?: string[];
  redirect?: string;
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
  query?: Partial<Recordable> | undefined;
  redirect?: string;
}

export interface Menu {
  name: string;

  path: string;

  orderNo?: number;

  query?: Partial<Recordable> | undefined;

  meta: Partial<RouteMeta>;

  children?: Menu[];
}

export interface App {
  count: number;
}

export interface RoutesListState {
  routesList: Array<AppRouteRecordRaw>;
}

export interface TagsViewRoutesState {
  tagsViewRoutes: Array<Menu>;
}
export type AppRouteModule = AppRouteRecordRaw;
