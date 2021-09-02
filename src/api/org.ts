import { request } from '@/utils/axios/request';
import { OrgAddDto, OrgEditDto, DptEditDto, UserAddDto, UserEditDto } from '@/types/dtos/orgDto';
const OrgApi = {
  /*
   @获取机构列表
   */
  getOrgList<T>() {
    return request.get<T>('/api/admin/v0/organization/list');
  },
  /*
   @新增机构
   */
  addOrg<T>(params: OrgAddDto) {
    return request.post<T>('/api/admin/v0/organization/create', params);
  },
  /*
    @编辑机构
   */
  editOrg<T>(params: OrgEditDto, orgId: string): any {
    return request.post<T>('/api/admin/v0/organization/update/' + orgId, params);
  },
  /*
    @删除机构
   */
  deleteOrg<T>(orgId: string) {
    return request.post<T>('/api/admin/v0/organization/delete/' + orgId);
  },
  /*
    @搜索机构
   */
  searchOrg<T>(name: string) {
    return request.get<T>('/api/admin/v0/organization/search/name/' + name);
  },
  /*
   @获取部门列表
   */
  getDptList<T>(oid: string) {
    return request.get<T>('/api/admin/v0/organization/department/list/' + oid);
  },
  /**
   * @des 修改部门信息
   */
  editDpt<T>(params: DptEditDto, did: string) {
    return request.post<T>('/api/admin/v0/organization/department/update/' + did, params);
  },
  /**
   * @des 获取机构用户角色列表 【通过部门ID】
   */
  getRoleListByDpt<T>(oid: string) {
    return request.get<T>('/api/admin/v0/organization/role/list/' + oid);
  },
  /**
   * @des 获取用户列表 【通过机构ID】
   */
  getUserListByOrg<T>(oid: string) {
    return request.get<T>('/api/admin/v0/organization/user/list2/' + oid);
  },
  /**
   * @des 获取用户列表 【通过部门ID】
   */
  getUserListByDpt<T>(did: string) {
    return request.get<T>('/api/admin/v0/organization/user/list/' + did);
  },
  /**
   * @des 获取用户头像
   */
  getuserAvatar<T>(uid: string) {
    return request.get<T>('/api/admin/v0/organization/user/avatar/' + uid);
  },
  /**
   * @des 获取用户签名
   */
  getuserSignature<T>(uid: string) {
    return request.get<T>('/api/admin/v0/organization/user/signature/' + uid);
  },
  /**
   * @des 创建用户签名
   */
  createUser<T>(params: UserAddDto) {
    return request.post<T>('/api/admin/v0/organization/user/create', params);
  },
  /**
   * @des 删除机构用户
   */
  deleteUser<T>(uid: string) {
    return request.post<T>('/api/admin/v0/organization/user/delete/' + uid);
  },
  /**
   * @des 修改机构用户
   */
  editUser<T>(uid: string, params: UserEditDto) {
    return request.post<T>('/api/admin/v0/organization/user/update/' + uid, params);
  },
};
export default OrgApi;
