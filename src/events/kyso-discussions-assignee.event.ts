import { Discussion } from '../models/discussion.model';
import { Organization } from '../models/organization.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';

export interface KysoDiscussionsAssigneeEvent {
  user: User;
  to: string | string[];
  assigneeUser?: User;
  organization: Organization;
  team: Team;
  discussion: Discussion;
  frontendUrl: string;
}
