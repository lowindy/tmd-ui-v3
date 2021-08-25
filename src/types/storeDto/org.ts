import { DptListDto, OrgDto, RoleListDto } from '../dtos/orgDto';

export interface OrgState {
  orgs: OrgDto[];
  orgsLoaded: boolean;
  selectedOrgId: string;
  depList: DptListDto[];
  roleList: RoleListDto[];
}
