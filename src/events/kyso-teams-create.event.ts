import { Organization } from '../models/organization.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoTeamsCreateEvent extends KysoEvent {
  user: User;
  organization: Organization;
  team: Team;
  frontendUrl: string;
}
