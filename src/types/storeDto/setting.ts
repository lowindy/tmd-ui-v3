export interface SettingState {
  settingCfg: {
    isCollapse: boolean;
    lang: langEnum;
  };
}
export enum langEnum {
  ZHCN = 'zhcn',
  EN = 'en',
}