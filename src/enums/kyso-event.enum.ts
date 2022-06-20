export enum KysoEvent {
  // COMMENTS
  COMMENTS_CREATE = 'kyso.comments.create',
  COMMENTS_UPDATE = 'kyso.comments.update',
  COMMENTS_DELETE = 'kyso.comments.delete',
  // DISCUSSIONS
  DISCUSSIONS_CREATE = 'kyso.discussions.create',
  DISCUSSIONS_UPDATE = 'kyso.discussions.update',
  DISCUSSIONS_DELETE = 'kyso.discussions.delete',
  DISCUSSIONS_NEW_ASSIGNEE = 'kyso.discussions.new_assignee',
  DISCUSSIONS_REMOVE_ASSIGNEE = 'kyso.discussions.remove_assignee',
  DISCUSSIONS_USER_ASSIGNED = 'kyso.discussions.user_assigned',
  DISCUSSIONS_USER_UNASSIGNED = 'kyso.discussions.user_unassigned',
  // REPORTS
  REPORTS_CREATE = 'kyso.reports.create',
  REPORTS_NEW_VERSION = 'kyso.reports.new_version',
  REPORTS_UPDATE = 'kyso.reports.update',
  REPORTS_DELETE = 'kyso.reports.delete',
  REPORTS_CREATE_NO_PERMISSIONS = 'kyso.reports.create_no_permissions',
  // USERS
  USERS_CREATE = 'kyso.users.create',
  USERS_UPDATE = 'kyso.users.update',
  USERS_DELETE = 'kyso.users.delete',
}