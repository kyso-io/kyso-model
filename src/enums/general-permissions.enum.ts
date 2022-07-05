import { BitbucketRepoPermissionsEnum } from './bitbucket-repos-permissions.enum';
import { CommentPermissionsEnum, commentPermissionsEnumsList } from './comment-permissions.enum';
import { DiscussionPermissionsEnum, discussionPermissionsEnumsList } from './discussion-permissions.enum';
import { GithubRepoPermissionsEnum } from './github-repos-permissions.enum';
import { GitlabRepoPermissionsEnum } from './gitlab-repos-permissions.enum';
import { InlineCommentPermissionsEnum, inlineCommentPermissionsEnumsList } from './inline-comment-permissions.enum';
import { OrganizationPermissionsEnum, organizationPermissionsEnumList } from './organization-permissions.enum';
import { ReportPermissionsEnum, reportPermissionsEnumList } from './report-permissions.enum';
import { StoragePermissionsEnum, storagePermissionsEnumsList } from './storage-permissions.enum';
import { organizationAdminRoleContribution, TeamPermissionsEnum } from './team-permissions.enum';
import { UserPermissionsEnum, userPermissionsEnumList } from './user-permissions.enum';

export enum GlobalPermissionsEnum {
  GLOBAL_ADMIN = 'KYSO_IO_GENERAL_GLOBAL_ADMIN',
}

export const globalPermissionsEnumList: GlobalPermissionsEnum[] = [GlobalPermissionsEnum.GLOBAL_ADMIN];

export type KysoPermissions =
  | GlobalPermissionsEnum
  | StoragePermissionsEnum
  | CommentPermissionsEnum
  | OrganizationPermissionsEnum
  | ReportPermissionsEnum
  | TeamPermissionsEnum
  | UserPermissionsEnum
  | GithubRepoPermissionsEnum
  | BitbucketRepoPermissionsEnum
  | GitlabRepoPermissionsEnum
  | DiscussionPermissionsEnum
  | InlineCommentPermissionsEnum;

export const kysoPermissionsList: KysoPermissions[] = [
  ...globalPermissionsEnumList,
  ...storagePermissionsEnumsList,
  ...commentPermissionsEnumsList,
  ...discussionPermissionsEnumsList,
  ...organizationPermissionsEnumList,
  ...reportPermissionsEnumList,
  ...organizationAdminRoleContribution,
  ...userPermissionsEnumList,
  ...userPermissionsEnumList,
  ...inlineCommentPermissionsEnumsList,
];
