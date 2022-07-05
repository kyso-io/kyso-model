export enum DiscussionPermissionsEnum {
  READ = 'KYSO_IO_READ_DISCUSSION',
  CREATE = 'KYSO_IO_CREATE_DISCUSSION',
  EDIT = 'KYSO_IO_EDIT_DISCUSSION',
  EDIT_ONLY_MINE = 'KYSO_IO_EDIT_DISCUSSION_ONLY_MINE',
  DELETE = 'KYSO_IO_DELETE_DISCUSSION',
  ADMIN = 'KYSO_IO_ADMIN_DISCUSSION',
}

export const discussionPermissionsEnumsList: DiscussionPermissionsEnum[] = [
  DiscussionPermissionsEnum.READ,
  DiscussionPermissionsEnum.CREATE,
  DiscussionPermissionsEnum.EDIT,
  DiscussionPermissionsEnum.EDIT_ONLY_MINE,
  DiscussionPermissionsEnum.DELETE,
  DiscussionPermissionsEnum.ADMIN,
];
