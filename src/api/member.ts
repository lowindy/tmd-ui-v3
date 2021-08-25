import { request } from '@/utils/axios/request';
import { SigninDto } from '@/types/dtos/signInDto';
const MemberApi = {
  signinApp<T>(params: SigninDto) {
    return request.post<T>('/api/signApp/v0/SignIn', params);
  },
  signOut<T>() {
    return request.get<T>('/api/userApp/v0/SignOut');
  }
};
export default MemberApi;
