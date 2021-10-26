export interface ThemeState {
  theme: string;
  color: string;
  cptSize: cptSizeEnum;
  radiusSize: radiusSizeEnum;
}
export enum themeEnum {
  Default = 'default',
  Dark = 'dark',
}
export enum cptSizeEnum {
  Default = 'default',
  Medium = 'medium',
  Small = 'small',
  Mini = 'mini',
}
export enum radiusSizeEnum {
  Default = '4px',
  Round = '20px',
  Material = '0px',
}

export function theneList(): Object {
  return [
    { name: '默认风格', theme: themeEnum.Default },
    { name: '暗黑风格', theme: themeEnum.Dark },
  ];
}

export function colorList(): Object {
  return [{ primary: '#409eff' }, { primary: '#2D9261' }, { primary: '#ff7400' }];
}
