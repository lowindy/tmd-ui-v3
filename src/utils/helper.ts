export function setlocalStorage(key: string, value: any) {
  if (localStorage) {
    if (!key || !value) {
      return;
    }
    let val;
    if (value.constructor === Object) {
      val = JSON.stringify(value);
    } else {
      val = value;
    }
    localStorage.setItem(key, val);
  }
}
export enum getlocalStorageEnum {
  'string',
  'number',
  'object'
}
export function getlocalStorage(key: string, type: getlocalStorageEnum = getlocalStorageEnum.string): any {
  if (localStorage) {
    if (!key) {
      return;
    }
    const val = localStorage.getItem(key);
    if (!val) {
      return null;
    }
    if (type == getlocalStorageEnum.object) {
      return JSON.parse(val);
    }
    if (type == getlocalStorageEnum.number) {
      return Number(val);
    }
    return val;
  }
}

export function copyObject(data: object) {
  return JSON.parse(JSON.stringify(data));
}
export function isCellphone(data: string) {
  const patt = /^1[345789]\d{9}$/;
  return patt.test(data);
}
export function jsonGroup(list: Array<any>, _key: string) {
  const data = {};
  for (let i = 0; i < list.length; i++) {
    if (!data[list[i][_key]]) {
      const arr = [];
      arr.push(list[i]);
      data[list[i][_key]] = arr;
    } else {
      data[list[i][_key]].push(list[i]);
    }
  }
  return data;
}
export function objContrast(newObj: object, oldObj: object) {
  const result = {};
  if (JSON.stringify(newObj) === JSON.stringify(oldObj)) {
    return result;
  }
  for (const o in newObj) {
    if (newObj[o] && newObj[o].constructor === Object) {
      if (JSON.stringify(newObj[o]) !== JSON.stringify(oldObj[o])) {
        result[o] = newObj[o];
      }
    } else {
      if (o.substr(o.length - 1, 1) !== '_') {
        result[o] = newObj[o];
      } else {
        if (newObj[o] !== oldObj[o]) {
          result[o] = newObj[o];
        }
      }
    }
  }
  return result;
}
