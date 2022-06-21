import { Organization } from '../models/organization.model';
import { Team } from '../models/team.model';

export interface KysoTeamsUpdateEvent {
  organization: Organization;
  team: Team;
}
