import { Discussion } from '../models/discussion.model';
import { Organization } from '../models/organization.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoDiscussionsAssigneeEvent extends KysoEvent {
  user: User;
  to: string | string[];
  assigneeUser?: User;
  organization: Organization;
  team: Team;
  discussion: Discussion;
  frontendUrl: string;
}
