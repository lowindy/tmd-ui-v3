/*
 * @Description: 任务管理DTO
 * @Date: 2021-08-04 15:03:59
 * @LastEditTime: 2021-08-11 13:47:13
 */
/**
 * @des 任务列表DTO
 */
export interface TaskDto {
  patientName: string; // 患者姓名
  patientGender: string; // 患者性别
  patientAge: string; // 患者年龄
  patientFrom: string; // 患者来源
  deviceTypeName: string; // 设备类型
  checkingItems: string[]; // 检查项目
  status: number; // 报告状态
  regNo: string; // 登记单号
  regDt: string; // 登记时间
  performNo: string; // 检查单号
  srcHospitalName: string; // 检查医院
}
/**
 * @des 任务详情DTO
 */
export interface TaskDetailDto {
  patientName: string; // 患者姓名
  patientGender: string; // 患者性别
  patientAge: string; // 患者年龄
  patientFrom: string; // 患者来源
  deviceTypeName: string; // 设备类型
  checkingItems: string[]; // 检查项目
  status: number; // 报告状态
  regNo: string; // 登记单号
  regDt: string; // 登记时间
  performNo: string; // 检查单号
  srcHospitalName: string; // 检查医院
  destHospitalName: string; // 诊断医院
  createrName: string; // 报告医生
  firstApproverName: string; // 审核医生
}
/**
 * @des 任务日志列表DTO
 */
export interface TaskRecordDto {
  title: string; // 操作类型名称
  comment: string; // 操作信息
  createDt: string; // 操作时间
  createHospital: string; // 操作医院
  creater: string; // 操作人
}

/**
 * @des 诊断组DTO
 */
export interface DiagnosisGroupDto {
  id: string;
  name: string;
}
/**
 * @des 诊断组详情DTO
 */
export interface DiagnosisGroupDetailDto extends DiagnosisGroupDto {}
/**
 * @des 新增诊断组DTO
 */
export interface DiagnosisCreateDto {
  name: string;
}
/**
 * @des 修改诊断组DTO
 */
export interface DiagnosisEditDto {
  name_: string;
}
/**
 * @des 诊断组人员列表
 */
export interface DiagnosisMemberDto {
  id: '';
  username: '';
  nickname: '';
  email: '';
  roleId: '';
  departmentId: '';
  departmentName: '';
  organizationName: '';
  gender: '';
  birthDate: '';
  address: '';
  title: '';
  speciality: '';
  description: '';
  employeeId: '';
}
/**
 * @des 诊断组负责任务组列表
 */
export interface DiagnosisGroupPolicyTargetDto {
  id: string;
  categoryGroupId: string;
  categoryGroupName: string;
  categoryOrganizationName: string;
  diagnosisGroupId: string;
  diagnosisGroupName: string;
  order: number;
  expireInMinutes: number;
  isEnabled: boolean;
}
/**
 * @des 任务组DTO
 */
export interface TaskGroupDto {
  id: string;
  organizationId: string;
  name: string;
}
/**
 * @des 新增任务组DTO
 */
export interface TaskGroupCreateDto {
  organizationId: string;
  name: string;
}
/**
 * @des 修改任务组DTO
 */
export interface TaskGroupEditDto {
  name_: string;
}

/**
 * @des 任务组详情
 */
export interface TaskGroupDetailDto {
  id: string;
  organizationId: string;
  name: string;
}

/**
 * @des 任务分拣规则DTO
 */
export interface TaskRuleDto {
  id: string;
  ownerId: string;
  isEnabled: boolean;
  order: number;
  sourceDepartmentId: string;
  isSourceOutPatientEnabled: boolean;
  isSourceInPatientEnabled: boolean;
  isSourceEmergencyEnabled: boolean;
  isSourceMedicalExaminationEnabled: boolean;
  examItemIdsEnabled: string[];
  examItemNamesEnabled: string[];
  examItems?: string[];
}

/**
 * @des 新增任务分拣规则DTO
 */
export interface TaskRuleAddDto {
  ownerId: string;
  isEnabled: boolean;
  order: number;
  sourceDepartmentId: string;
  isSourceOutPatientEnabled: boolean;
  isSourceInPatientEnabled: boolean;
  isSourceEmergencyEnabled: boolean;
  isSourceMedicalExaminationEnabled: boolean;
  examItemIdsEnabled: string[];
}
/**
 * @des 修改任务分拣规则DTO
 */
export interface TaskRuleEditDto {
  ownerId_?: string;
  isEnabled_?: boolean;
  order_?: number;
  sourceDepartmentId_?: string;
  isSourceOutPatientEnabled_?: boolean;
  isSourceInPatientEnabled_?: boolean;
  isSourceEmergencyEnabled_?: boolean;
  isSourceMedicalExaminationEnabled_?: boolean;
  examItemIdsEnabled_?: string[];
}
/**
 * @des 机构检查项目DTO
 */
export interface ExamItemDto {
  id: string;
  name: string;
  modality: string;
}

/**
 * @des 机构检查项目DTO
 */
export interface ExamItemCustomerDto {
  id: string;
  label: string;
  modality: string;
  checked: boolean;
  hidden: boolean;
}

/**
 * @des 诊断策略
 */
export interface TaskPolicyDto {
  id: string;
  categoryGroupId: string;
  categoryGroupName: string;
  categoryOrganizationName: string;
  diagnosisGroupId: string;
  diagnosisGroupName: string;
  order: number;
  expireInMinutes: number;
  isEnabled: boolean;
}

/**
 * @des 新增诊断策略
 */
export interface TaskPolicyCreateDto {
  categoryGroupId: string;
  diagnosisGroupId: string;
  order: number;
  expireInMinutes: number;
  isEnabled: boolean;
}

/**
 * @des 修改诊断策略
 */
export interface TaskPolicyUpdateDto {
  diagnosisGroupId_?: string;
  order_?: number;
  expireInMinutes: number;
  isEnabled_?: boolean;
}
