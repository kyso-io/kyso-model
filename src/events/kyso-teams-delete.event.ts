import { Organization } from '../models/organization.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';

export interface KysoTeamsDeleteEvent {
  user: User;
  organization: Organization;
  team: Team;
}
