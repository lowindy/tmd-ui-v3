import { colorList, cptSizeEnum, radiusSizeEnum, themeEnum } from '@/types/storeDto/theme';
export const defaultCfg = {
  color: colorList()[0].primary,
  theme: themeEnum.Default, // 默认风格配置
  cptSize: cptSizeEnum.Medium, // 默认组件大小配置
  radiusSize: radiusSizeEnum.Default, // 默认圆角配置
};
