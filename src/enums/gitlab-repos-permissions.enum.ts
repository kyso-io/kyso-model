export enum GitlabRepoPermissionsEnum {
  READ = 'KYSO_IO_READ_GITLAB_REPO',
  CREATE = 'KYSO_IO_CREATE_GITLAB_REPO',
  EDIT = 'KYSO_IO_EDIT_GITLAB_REPO',
  DELETE = 'KYSO_IO_DELETE_GITLAB_REPO',
  ADMIN = 'KYSO_IO_ADMIN_GITLAB_REPO',
}

export const gitlabRepoPermissionsEnumList: GitlabRepoPermissionsEnum[] = [
  GitlabRepoPermissionsEnum.READ,
  GitlabRepoPermissionsEnum.CREATE,
  GitlabRepoPermissionsEnum.EDIT,
  GitlabRepoPermissionsEnum.DELETE,
  GitlabRepoPermissionsEnum.ADMIN,
];
