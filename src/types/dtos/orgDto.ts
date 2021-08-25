/*
 * @Description: 机构管理DTO
 * @Date: 2021-07-29 14:39:19
 * @LastEditTime: 2021-08-11 10:06:00
 */

/**
 * @des 机构
 */
export interface OrgDto {
  id: string;
  name: string;
  alias: string;
  address: string;
  contacts: string;
  phone: string;
  isScanningCapable: boolean;
  isDiagnosisCapable: boolean;
}
export interface OrgAddDto {
  code: string;
  // minLength: 4 唯一缩写码
  name: string;
  // minLength: 4 名称
  alias_?: string;
  // 别名
  address_?: string;
  // 地址
  contacts_?: string;
  // 联系人
  phone_?: string;
  // 电话
  isScanningCapable_?: boolean;
  // 有检查扫描能力
  isDiagnosisCapable_?: boolean;
  // 有诊断写报告能力
}
export interface OrgEditDto {
  name_: string;
  // minLength: 4 名称
  alias_?: string;
  // 别名
  address_?: string;
  // 地址
  contacts_?: string;
  // 联系人
  phone_?: string;
  // 电话
  isScanningCapable_?: boolean;
  // 有检查扫描能力
  isDiagnosisCapable_?: boolean;
  // 有诊断写报告能力
}
export interface OrgAddResDto {
  id: string;
}
/**
 * @des 机构部门
 */
export interface DptDto {
  id: string;
  // 标识ID
  name: string;
  // 名称
  kind: string;
  // 部门类型 [ Unknown, Radiology, Clinic ]
  secretId: string;
  // 秘密ID
  lock: string;
  // 接口锁类型 [ None, ReportAndApprove, Report, Approve ]
}
export interface DptListDto {
  oid: string;
  list: DptDto[];
}

export interface DptEditDto {
  name_: string;
  // 名称
  secretId_: string;
  // 秘密ID
  lock_: string;
  // 接口锁类型 [ None, ReportAndApprove, Report, Approve ]
}
/**
 * @des 机构用户
 */
export interface UserDto {
  id: string;
  username: string;
  nickname: string;
  email: string;
  roleId: string;
  roleName?: string;
  departmentId: string;
  departmentName: string;
  organizationName: string;
  gender: string;
  birthDate: string;
  address: string;
  title: string;
  speciality: string;
  description: string;
  employeeId: string;
}
export interface UserAddDto {
  username: string;
  password: string;
  departmentId: string;
  nickname_: string;
  email_: string;
  roleId_: string;
  gender_: string;
  birthDate_: string;
  address_: string;
  title_: string;
  speciality_: string;
  description_: string;
  avatar_: string;
  signature_: string;
  employeeNumber_: string;
}
export interface UserEditDto {
  nickname_?: string;
  password_?: string;
  email_?: string;
  roleId_?: string;
  departmentId_?: string;
  gender_?: string;
  birthDate_?: string;
  address_?: string;
  title_?: string;
  speciality_?: string;
  description_?: string;
  avatar_?: string;
  signature_?: string;
  employeeId_?: string;
}
export interface UserCreateResponseDto {
  id: string;
}
/**
 * @des 机构用户角色
 */
export interface RoleDto {
  id: string;
  name: string;
}
export interface RoleListDto {
  did: string;
  list: RoleDto[];
}
/**
 * @des 接口锁类型
 */
enum lockEnum {
  None = 'None',
  ReportAndApprove = 'ReportAndApprove',
  Report = 'Report',
  Approve = 'Approve'
}
export const locksData = () => {
  return [
    { label: '无', value: lockEnum.None },
    { label: '报告和审批', value: lockEnum.ReportAndApprove },
    { label: '报告', value: lockEnum.Report },
    { label: '审批', value: lockEnum.Approve }
  ];
};
/**
 * @des 性别类型
 */
export enum genderEnum {
  Unknown = 'Unknown',
  Male = 'Male',
  Female = 'Female'
}
export const genderData = () => {
  return [
    { label: '保密', value: genderEnum.Unknown },
    { label: '男', value: genderEnum.Male },
    { label: '女', value: genderEnum.Female }
  ];
};
