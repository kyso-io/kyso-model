export enum GithubRepoPermissionsEnum {
  READ = 'KYSO_IO_READ_GITHUB_REPO',
  CREATE = 'KYSO_IO_CREATE_GITHUB_REPO',
  EDIT = 'KYSO_IO_EDIT_GITHUB_REPO',
  DELETE = 'KYSO_IO_DELETE_GITHUB_REPO',
  ADMIN = 'KYSO_IO_ADMIN_GITHUB_REPO',
}

export const githubRepoPermissionsEnumList: GithubRepoPermissionsEnum[] = [
  GithubRepoPermissionsEnum.READ,
  GithubRepoPermissionsEnum.CREATE,
  GithubRepoPermissionsEnum.EDIT,
  GithubRepoPermissionsEnum.DELETE,
  GithubRepoPermissionsEnum.ADMIN,
];
