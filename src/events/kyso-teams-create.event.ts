import { Organization } from '../models/organization.model';
import { Team } from '../models/team.model';

export interface KysoTeamsCreateEvent {
  organization: Organization;
  team: Team;
}
