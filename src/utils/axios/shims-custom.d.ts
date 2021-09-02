declare module 'axios' {
  // 定制业务相关的网络请求响应格式， T 是具体的接口返回类型数据
  export interface CustomSuccessData<T> {
    code: number;
    message?: string;
    data?: T;
    [keys: string]: any;
  }
}
