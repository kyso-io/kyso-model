export enum KysoEvent {
  // COMMENTS
  COMMENTS_CREATE = 'kyso.comments.create',
  COMMENTS_DELETE = 'kyso.comments.delete',
  COMMENTS_UPDATE = 'kyso.comments.update',
  // DISCUSSIONS
  DISCUSSIONS_CREATE = 'kyso.discussions.create',
  DISCUSSIONS_DELETE = 'kyso.discussions.delete',
  DISCUSSIONS_MENTIONS = 'kyso.discussions.mentions',
  DISCUSSIONS_NEW_ASSIGNEE = 'kyso.discussions.new-assignee',
  DISCUSSIONS_NEW_MENTION = 'kyso.discussions.new-mention',
  DISCUSSIONS_REMOVE_ASSIGNEE = 'kyso.discussions.remove-assignee',
  DISCUSSIONS_UPDATE = 'kyso.discussions.update',
  DISCUSSIONS_USER_ASSIGNED = 'kyso.discussions.user-assigned',
  DISCUSSIONS_USER_UNASSIGNED = 'kyso.discussions.user-unassigned',
  // FEEDBACK
  FEEDBACK_CREATE = 'kyso.feedback.create',
  // INVITATIONS
  INVITATIONS_TEAM_CREATE = 'kyso.invitations.team-create',
  // ORGANIZATION
  ORGANIZATIONS_ADD_MEMBER = 'kyso.organizations.add-member',
  ORGANIZATIONS_REMOVE_MEMBER = 'kyso.organizations.remove-member',
  // REPORTS
  REPORTS_CREATE = 'kyso.reports.create',
  REPORTS_CREATE_NO_PERMISSIONS = 'kyso.reports.create-no-permissions',
  REPORTS_DELETE = 'kyso.reports.delete',
  REPORTS_NEW_VERSION = 'kyso.reports.new-version',
  REPORTS_UPDATE = 'kyso.reports.update',
  // TEAMS
  TEAMS_ADD_MEMBER = 'kyso.teams.add-member',
  TEAMS_REMOVE_MEMBER = 'kyso.teams.remove-member',
  // USERS
  USERS_CREATE = 'kyso.users.create',
  USERS_DELETE = 'kyso.users.delete',
  USERS_UPDATE = 'kyso.users.update',
  USERS_RECOVERY_PASSWORD = 'kyso.users.recovery-password',
  USERS_VERIFICATION_EMAIL = 'kyso.users.verification-email',
}