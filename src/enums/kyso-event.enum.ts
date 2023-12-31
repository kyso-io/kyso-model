export enum KysoEventEnum {
  // ANALYTICS
  ANALYTICS_REPORT_DOWNLOAD = 'kyso.analytics.report.download',
  ANALYTICS_REPORT_SHARE = 'kyso.analytics.report.share',
  ANALYTICS_REPORT_VIEW = 'kyso.analytics.report.view',
  // COMMENTS
  COMMENTS_CREATE = 'kyso.comments.create',
  COMMENTS_DELETE = 'kyso.comments.delete',
  COMMENTS_REPLY = 'kyso.comments.reply',
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
  // INLINE COMMENTS
  INLINE_COMMENTS_CHANGE_STATUS = 'kyso.inline-comments.change-status',
  INLINE_COMMENTS_CREATE = 'kyso.inline-comments.create',
  INLINE_COMMENTS_DELETE = 'kyso.inline-comments.delete',
  INLINE_COMMENTS_REPLY = 'kyso.inline-comments.reply',
  INLINE_COMMENTS_UPDATE = 'kyso.inline-comments.update',
  // INVITATIONS
  INVITATIONS_TEAM_CREATE = 'kyso.invitations.team-create',
  // ORGANIZATION
  ORGANIZATIONS_ADD_MEMBER = 'kyso.organizations.add-member',
  ORGANIZATIONS_CREATE = 'kyso.organizations.create',
  ORGANIZATIONS_DELETE = 'kyso.organizations.delete',
  ORGANIZATIONS_REMOVE_MEMBER = 'kyso.organizations.remove-member',
  ORGANIZATIONS_UPDATE = 'kyso.organizations.update',
  ORGANIZATIONS_UPDATE_MEMBER_ROLE = 'kyso.organizations.update-member-role',
  ORGANIZATIONS_UPDATE_CENTRALIZED_COMMUNICATIONS = 'kyso.organizations.update-centralized-communications',
  ORGANIZATIONS_UPDATE_OPTIONS = 'kyso.organizations.update-options',
  ORGANIZATION_REQUEST_ACCESS_CREATED = 'kyso.organizations.request-access-created',
  ORGANIZATION_REQUEST_ACCESS_ACCEPTED = 'kyso.organizations.request-access-accepted',
  ORGANIZATION_REQUEST_ACCESS_REJECTED = 'kyso.organizations.request-access-rejected',
  // REPORTS
  REPORTS_ADD_AUTHOR = 'kyso.reports.add-author',
  REPORTS_CREATE = 'kyso.reports.create',
  REPORTS_CREATE_NO_PERMISSIONS = 'kyso.reports.create-no-permissions',
  REPORTS_DELETE = 'kyso.reports.delete',
  REPORTS_MENTIONS = 'kyso.reports.mentions',
  REPORTS_MOVE = 'kyso.reports.move',
  REPORTS_NEW_MENTION = 'kyso.reports.new-mention',
  REPORTS_NEW_VERSION = 'kyso.reports.new-version',
  REPORTS_PIN = 'kyso.reports.pin',
  REPORTS_PIN_GLOBAL = 'kyso.reports.pin-global',
  REPORTS_STAR = 'kyso.reports.star',
  REPORTS_UNPIN = 'kyso.reports.unpin',
  REPORTS_UNPIN_GLOBAL = 'kyso.reports.unpin-global',
  REPORTS_UNSTAR = 'kyso.reports.unstar',
  REPORTS_UPDATE = 'kyso.reports.update',
  REPORTS_UPDATED_MAIN_FILE = 'kyso.reports.updated-main-file',
  // TAGS
  TAGS_CREATE = 'kyso.tags.create',
  TAGS_DELETE = 'kyso.tags.delete',
  TAGS_UPDATE = 'kyso.tags.update',
  // TEAMS
  TEAMS_ADD_MEMBER = 'kyso.teams.add-member',
  TEAMS_CREATE = 'kyso.teams.create',
  TEAMS_DELETE = 'kyso.teams.delete',
  TEAMS_REMOVE_MEMBER = 'kyso.teams.remove-member',
  TEAMS_UPDATE = 'kyso.teams.update',
  TEAMS_UPDATE_MEMBER_ROLES = 'kyso.teams.update-member-roles',
  TEAMS_REQUEST_ACCESS_CREATED = 'kyso.teams.request-access-created',
  TEAMS_REQUEST_ACCESS_ACCEPTED = 'kyso.teams.request-access-accepted',
  TEAMS_REQUEST_ACCESS_REJECTED = 'kyso.teams.request-access-rejected',
  // TRACEABILITY
  TRACEABILITY_CREATE = 'kyso.traceability.create',
  // USERS
  USERS_CREATE = 'kyso.users.create',
  USERS_DELETE = 'kyso.users.delete',
  USERS_UPDATE = 'kyso.users.update',
  USERS_RECOVERY_PASSWORD = 'kyso.users.recovery-password',
  USERS_VERIFICATION_EMAIL = 'kyso.users.verification-email',
}
