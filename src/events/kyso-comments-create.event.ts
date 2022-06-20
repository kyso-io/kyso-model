import { Comment } from '../models/comment.model';
import { Discussion } from '../models/discussion.model';
import { Organization } from '../models/organization.model';
import { Report } from '../models/report.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';

export interface KysoCommentsCreateEvent {
  user: User;
  organization: Organization;
  team: Team;
  comment: Comment;
  discussion?: Discussion;
  report?: Report;
}
