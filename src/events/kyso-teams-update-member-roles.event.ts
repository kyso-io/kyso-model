import { Organization } from '../models/organization.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoTeamsUpdateMemberRolesEvent extends KysoEvent {
  userA: User;
  userB: User;
  organization: Organization;
  team: Team;
  emailsCentralized: string[];
  previousRoles: string[];
  currentRoles: string[];
  frontendUrl: string;
}
