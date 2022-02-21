export enum BitbucketRepoPermissionsEnum {
  READ = 'KYSO_IO_READ_BITBUCKET_REPO',
  CREATE = 'KYSO_IO_CREATE_BITBUCKET_REPO',
  EDIT = 'KYSO_IO_EDIT_BITBUCKET_REPO',
  DELETE = 'KYSO_IO_DELETE_BITBUCKET_REPO',
  ADMIN = 'KYSO_IO_ADMIN_BITBUCKET_REPO',
}

export const bitbucketRepoPermissionsEnumList: BitbucketRepoPermissionsEnum[] = [
  BitbucketRepoPermissionsEnum.READ,
  BitbucketRepoPermissionsEnum.CREATE,
  BitbucketRepoPermissionsEnum.EDIT,
  BitbucketRepoPermissionsEnum.DELETE,
  BitbucketRepoPermissionsEnum.ADMIN,
];
