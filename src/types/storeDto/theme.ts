export interface ThemeState {
  theme: string;
  color: string;
}
export enum themeEnum {
  Defalut = 'defalut',
  Dark = 'dark',
}
export function theneList(): Object {
  return [
    { name: '默认风格', theme: themeEnum.Defalut },
    { name: '暗黑风格', theme: themeEnum.Dark },
  ];
}

export function colorList(): Object {
  return [{ primary: '#409eff' }, { primary: '#2D9261' }, { primary: '#ff7400' }];
}
