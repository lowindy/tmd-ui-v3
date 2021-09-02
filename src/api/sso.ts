import { request } from '@/utils/axios/request';

/*
 * @Description: ssoAPi
 * @Date: 2021-08-12 15:25:18
 * @LastEditTime: 2021-08-13 09:30:34
 */
const SsoApi = {
  ssoLogin<T>() {
    return request.get<T>('/api/sso/v1/login');
  },
  getWorkBench<T>(phone: string) {
    return request.get<T>(`/api/sso/v1/work/stations/phone/${phone}`);
  },
  ssoLogout<T>(logincode: string) {
    return request.get<T>(`/api/sso/log-out?logincode=${logincode}`);
  },
};
export default SsoApi;
