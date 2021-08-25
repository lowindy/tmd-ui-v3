import router from '@/router';
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { ElMessage, ElLoading } from 'element-plus';
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type';
let loadingInstance: ILoadingInstance | null = null;
let loadingCount: number;
loadingCount = 0;
let loadingSetTimeout: any = null;
const showLoading = () => {
  loadingCount++;
  if (loadingInstance) {
    return;
  }
  loadingSetTimeout = setTimeout(() => {
    if (loadingCount === 0) {
      return;
    }
    loadingInstance = ElLoading.service({
      lock: true,
      text: '努力加载中...',
      background: 'rgba(0, 0, 0, 0.7)'
    });
  }, 800);
};

const hiddenLoading = () => {
  if (loadingSetTimeout) {
    clearTimeout(loadingSetTimeout);
    loadingSetTimeout = null;
  }
  loadingCount--;
  if (loadingInstance && loadingCount === 0) {
    loadingInstance.close();
    loadingInstance = null;
    if (loadingSetTimeout) {
      clearTimeout(loadingSetTimeout);
      loadingSetTimeout = null;
    }
  }
};
let url = '';
const localhostUrl = window.location.protocol + '//' + window.location.host;
if (localhostUrl !== process.env.VUE_APP_SSO_WEB_URL) {
  url = process.env.VUE_APP_BASE_API;
} else {
  url = '';
}
// 创建axios的实例
const service = axios.create({
  baseURL: url,
  timeout: 15000 // 超时时间
});

/**
 * @description 请求发起前的拦截器
 * @returns {AxiosRequestConfig} config
 */
service.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    showLoading();
    // 如果有token，则取，否则不添加Authorization
    const token = null;
    if (token) {
      const tokenType = 'Bearer';
      config.headers.Authorization = `${tokenType} ${token}`; // type后必须有一个空格
    }
    return config;
  },
  (error) => {
    hiddenLoading();
    return Promise.reject(error);
  }
);

/**
 * get status code
 * @param {AxiosResponse} response Axios  response object
 */
const errorCode = (response: AxiosResponse): string => {
  /** http status code */
  const code = response.status;
  /** notice text */
  let message = 'Request Error';
  switch (code) {
    case 204:
      message = '没有数据';
      break;
    case 400:
      message = 'Request Error';
      break;
    case 401:
      message = 'Unauthorized, please login';
      break;
    case 403:
      message = '拒绝访问';
      break;
    case 404:
      message = '访问资源不存在';
      break;
    case 408:
      message = '请求超时';
      break;
    case 500:
      message = '位置错误';
      break;
    case 501:
      message = '承载服务未实现';
      break;
    case 502:
      message = '网关错误';
      break;
    case 503:
      message = '服务暂不可用';
      break;
    case 504:
      message = '网关超时';
      break;
    case 505:
      message = '暂不支持的 HTTP 版本';
      break;
    default:
      message = '位置错误';
  }
  return message;
};

/**
 * @description 响应收到后的拦截器
 * @returns {}
 */
service.interceptors.response.use(
  /** 请求有响应 */
  async (response: AxiosResponse) => {
    hiddenLoading();
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      const __text = errorCode(response);
      return Promise.reject(__text);
    }
  },
  /** 请求无响应 */
  (error: AxiosError) => {
    hiddenLoading();
    let emsg = '';

    if (error.message) {
      emsg = error.message;
    }

    if (error.response) {
      emsg = (error.response.data.message ? error.response.data.message : error.response.data) || emsg;
    }
    // timeout
    if (emsg && typeof emsg === 'string' && emsg.indexOf('timeout') >= 0) {
      emsg = 'timeout';
    }

    if (error?.response?.status === 401) {
      if (router.currentRoute.value.path !== '/signin' && router.currentRoute.value.path !== '/workbench') {
        ElMessage.error('登录凭证已过期，请重新登录');
        router.push('/signin');
      }
      return Promise.reject(new Error('401'));
    }
    return Promise.reject(emsg);
  }
);

// 泛型接口
export interface Get {
  // <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>;
  <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<T>;
}
export interface Post {
  // <T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>;
  <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<T>;
}

// 封装 get 方法，类型为 Get
const get: Get = async (url, params) => {
  const response = await service.get(url, { params: params });
  return response.data;
};
// 封装 post 方法，类型为 Post
const post: Post = async (url, params) => {
  const response = await service.post(url, params);
  return response.data;
};

// 使用 request 统一调用，包括封装的get、post、put、delete等方法
const request = { get, post };

export { request };
