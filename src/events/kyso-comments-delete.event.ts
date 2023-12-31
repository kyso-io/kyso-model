import { Comment } from '../models/comment.model';
import { Discussion } from '../models/discussion.model';
import { InlineComment } from '../models/inline-comment.model';
import { Organization } from '../models/organization.model';
import { Report } from '../models/report.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoCommentsDeleteEvent extends KysoEvent {
  user: User;
  organization: Organization;
  team: Team;
  comment: Comment | InlineComment;
  discussion?: Discussion;
  report?: Report;
  frontendUrl: string;
}
