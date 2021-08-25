export interface SettingState {
  settingCfg: {
    isCollapse: boolean;
    lang: langEnum;
    cptSize: cptSizeEnum;
    radiusSize: radiusSizeEnum;
  };
}
export enum langEnum {
  ZHCN = 'zhcn',
  EN = 'en'
}
export enum cptSizeEnum {
  Default = 'default',
  Medium = 'medium',
  Small = 'small',
  Mini = 'mini'
}
export enum radiusSizeEnum {
  Default = '4px',
  Round = '20px',
  Material = '0px'
}
