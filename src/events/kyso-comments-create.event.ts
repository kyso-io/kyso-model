import { BaseComment } from '../models/base-comment.model';
import { Discussion } from '../models/discussion.model';
import { Organization } from '../models/organization.model';
import { Report } from '../models/report.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoCommentsCreateEvent extends KysoEvent {
  user: User;
  organization: Organization;
  team: Team;
  comment: BaseComment;
  discussion?: Discussion;
  report?: Report;
  frontendUrl: string;
}
