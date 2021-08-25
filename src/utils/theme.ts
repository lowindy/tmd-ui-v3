/* eslint-disable */
// hex颜色转rgb颜色
export function hexToRgb(str: any) {
  let hexs: any = '';
  const reg = /^\#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(str)) return;
  str = str.replace('#', '');
  hexs = str.match(/../g);
  for (let i = 0; i < 3; i++) hexs[i] = parseInt(hexs[i], 16);
  return hexs;
}

// rgb颜色转Hex颜色
export function rgbToHex(r: any, g: any, b: any) {
  const reg = /^\d{1,3}$/;
  if (!reg.test(r) || !reg.test(g) || !reg.test(b)) {
    return;
  }
  let hexs = [r.toString(16), g.toString(16), b.toString(16)];
  for (let i = 0; i < 3; i++) if (hexs[i].length == 1) hexs[i] = `0${hexs[i]}`;
  return `#${hexs.join('')}`;
}

// 加深颜色值，level为加深的程度，限0-1之间
export function getDarkColor(color: any, level: number) {
  const reg = /^\#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(color)) return;
  let rgb = hexToRgb(color);
  for (let i = 0; i < 3; i++) rgb[i] = Math.floor(rgb[i] * (1 - level));
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}

// 变浅颜色值，level为加深的程度，限0-1之间
export function getLightColor(color: any, level: number) {
  const reg = /^\#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(color)) {
    return;
  }
  const rgb = hexToRgb(color);
  for (let i = 0; i < 3; i++) rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}
