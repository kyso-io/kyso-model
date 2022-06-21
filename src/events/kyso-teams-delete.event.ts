import { Organization } from '../models/organization.model';
import { Team } from '../models/team.model';

export interface KysoTeamsDeleteEvent {
  organization: Organization;
  team: Team;
}
