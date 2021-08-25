/*
 * @Description: 任务管理
 * @Date: 2021-08-04 14:59:40
 * @LastEditTime: 2021-08-11 10:39:42
 */
import { request } from '@/utils/axios/request';
import {
  DiagnosisCreateDto,
  DiagnosisEditDto,
  TaskGroupCreateDto,
  TaskGroupEditDto,
  TaskPolicyCreateDto,
  TaskPolicyUpdateDto,
  TaskRuleAddDto,
  TaskRuleEditDto
} from '@/types/dtos/taskDto';
const TaskApi = {
  /*
   @获取任务列表
   */
  getTaskList<T>(oid: string) {
    console.log(oid);
    return request.get<T>(process.env.VUE_APP_MOCK_API + '/tasks/');
  },
  /*
   @搜搜任务列表
   */
  searchTask<T>(searchContent: string) {
    return request.get<T>(process.env.VUE_APP_MOCK_API + '/tasks?regNo=' + searchContent);
  },
  /*
   @获取任务列表
   */
  getTaskDetail<T>(id: string) {
    return request.get<T>(process.env.VUE_APP_MOCK_API + '/tasks?id=' + id);
  },
  /**
   * @des 诊断组列表
   */
  getDiagnosisGroup<T>() {
    return request.get<T>('/api/admin/v0/task/group/diagnosis/list');
  },
  /**
   * @des 诊断组详情
   */
  getDiagnosisGroupDetail<T>(gid: string) {
    return request.get<T>('/api/admin/v0/task/group/diagnosis/' + gid);
  },
  /**
   * @des 新增诊断组
   */
  addDiagnosisGroup<T>(params: DiagnosisCreateDto) {
    return request.post<T>('/api/admin/v0/task/group/diagnosis/create', params);
  },
  /**
   * @des 修改诊断组
   */
  editDiagnosisGroup<T>(gid: string, params: DiagnosisEditDto) {
    return request.post<T>('/api/admin/v0/task/group/diagnosis/update/' + gid, params);
  },
  /**
   * @des 删除诊断组
   */
  deleteDiagnosisGroup<T>(gid: string) {
    return request.post<T>('/api/admin/v0/task/group/diagnosis/delete/' + gid);
  },
  /**
   * @des 获取诊断组成员列表
   */
  getDiagnosisGroupMember<T>(gid: string) {
    return request.get<T>('/api/admin/v0/task/group/diagnosis/user/list/' + gid);
  },
  /**
   * @des 将人员添加到指定诊断组
   */
  addDiagnosisGroupMember<T>(gid: string, uid: string) {
    return request.post<T>(`/api/admin/v0/task/group/diagnosis/user/add/${gid}/${uid}`);
  },
  /**
   * @des 将人员从诊断组中删除
   */
  removeDiagnosisGroupMember<T>(gid: string, uid: string) {
    return request.post<T>(`/api/admin/v0/task/group/diagnosis/user/remove/${gid}/${uid}`);
  },
  /**
   * @des 获取诊断组负责任务组列表
   */
  getDiagnosisGroupPolicyTarget<T>(gid: string) {
    return request.get<T>(`/api/admin/v0/task/diagnosis/policy/target/${gid}`);
  },
  /**
   * @des 获取机构任务组
   */
  getTaskGroup<T>(oid: string) {
    return request.get<T>(`/api/admin/v0/task/group/category/list/organization/${oid}`);
  },
  /**
   * @des 任务组详情
   */
  getTaskGroupDetail<T>(gid: string) {
    return request.get<T>('/api/admin/v0/task/group/category/' + gid);
  },
  /**
   * @des 新增机构任务组
   */
  createTaskGroup<T>(params: TaskGroupCreateDto) {
    return request.post<T>('/api/admin/v0/task/group/category/create', params);
  },
  /**
   * @des 修改机构任务组
   */
  editTaskGroup<T>(gid: string, params: TaskGroupEditDto) {
    return request.post<T>(`/api/admin/v0/task/group/category/update/${gid}`, params);
  },
  /**
   * @des 修改机构任务组
   */
  deleteTaskGroup<T>(gid: string) {
    return request.post<T>(`/api/admin/v0/task/group/category/delete/${gid}`);
  },
  /**
   * @des 获取任务分拣规则
   */
  getsTaskRuleList<T>(gid: string) {
    return request.get<T>(`/api/admin/v0/task/categorize/rule/${gid}`);
  },
  /**
   * @des 新增任务分拣规则
   */
  createTaskRule<T>(params: TaskRuleAddDto) {
    return request.post<T>('/api/admin/v0/task/categorize/rule/create', params);
  },
  /**
   * @des 修改任务分拣规则
   */
  editTaskRule<T>(id: string, params: TaskRuleEditDto) {
    return request.post<T>(`/api/admin/v0/task/categorize/rule/update/${id}`, params);
  },
  /**
   * @des 删除任务分拣规则
   */
  deleteTaskRule<T>(id: string) {
    return request.post<T>(`/api/admin/v0/task/categorize/rule/delete/${id}`);
  },
  /**
   * @des 禁用任务分拣规则
   */
  enableTaskRule<T>(id: string, state: boolean) {
    return request.post<T>(`/api/admin/v0/task/categorize/rule/enable/${id}/${state}`);
  },
  /**
   * @des 获取某一机构的检查项目
   */
  getExamItemList<T>(oid: string) {
    return request.get<T>(`/api/admin/v0/organization/exam/items/${oid}`);
  },
  /**
   * @des 获取诊断策略列表
   */
  getTaskPolicyList<T>(gid: string) {
    return request.get<T>(`/api/admin/v0/task/diagnosis/policy/source/${gid}`);
  },
  /**
   * @des 新增诊断策略
   */
  createTaskPolicy<T>(params: TaskPolicyCreateDto) {
    return request.post<T>(`/api/admin/v0/task/diagnosis/policy/create`, params);
  },
  /**
   * @des 修改诊断策略
   */
  updateTaskPolicy<T>(id: string, params: TaskPolicyUpdateDto) {
    return request.post<T>(`/api/admin/v0/task/diagnosis/policy/update/${id}`, params);
  },
  /**
   * @des 删除诊断策略
   */
  deleteTaskPolicy<T>(id: string) {
    return request.post<T>(`/api/admin/v0/task/diagnosis/policy/delete/${id}`);
  },
  /**
   * @des 启用禁用诊断策略
   */
  enableTaskPolicy<T>(id: string, state: boolean) {
    return request.post<T>(`/api/admin/v0/task/diagnosis/policy/enable/${id}/${state}`);
  }
};
export default TaskApi;
