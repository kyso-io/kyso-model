import { CommentPermissionsEnum, commentPermissionsEnumsList } from './comment-permissions.enum';
import { GithubRepoPermissionsEnum } from './github-repos-permissions.enum';
import { OrganizationPermissionsEnum, organizationPermissionsEnumList } from './organization-permissions.enum';
import { ReportPermissionsEnum, reportPermissionsEnumList } from './report-permissions.enum';
import { organizationAdminRoleContribution, TeamPermissionsEnum } from './team-permissions.enum';
import { UserPermissionsEnum, userPermissionsEnumList } from './user-permissions.enum';

export enum GlobalPermissionsEnum {
  GLOBAL_ADMIN = 'KYSO_IO_GENERAL_GLOBAL_ADMIN',
}

export const globalPermissionsEnumList: GlobalPermissionsEnum[] = [GlobalPermissionsEnum.GLOBAL_ADMIN];

export type KysoPermissions =
  | GlobalPermissionsEnum
  | CommentPermissionsEnum
  | OrganizationPermissionsEnum
  | ReportPermissionsEnum
  | TeamPermissionsEnum
  | UserPermissionsEnum
  | GithubRepoPermissionsEnum;

export const kysoPermissionsList: KysoPermissions[] = [
  ...globalPermissionsEnumList,
  ...commentPermissionsEnumsList,
  ...organizationPermissionsEnumList,
  ...reportPermissionsEnumList,
  ...organizationAdminRoleContribution,
  ...userPermissionsEnumList,
  ...userPermissionsEnumList,
];
