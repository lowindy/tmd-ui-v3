import { RoutesListState } from './route';
import { SettingState } from './setting';
import { ThemeState } from './theme';
import { MemberState } from './member';
import { OrgState } from './org';
import { TaskState } from './task';

export interface RootStateTypes {
  setting: SettingState;
  theme: ThemeState;
  routesList: RoutesListState;
  member: MemberState;
  org: OrgState;
  task: TaskState;
}

export interface AllStateTypes extends RootStateTypes {
  SettingState: SettingState;
  ThemeState: ThemeState;
  RoutesListState: RoutesListState;
  MemberState: MemberState;
  OrgState: OrgState;
  TaskState: TaskState;
}
