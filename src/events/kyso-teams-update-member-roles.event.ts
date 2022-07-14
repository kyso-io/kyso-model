import { Organization } from '../models/organization.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';

export interface KysoTeamsUpdateMemberRolesEvent {
  user: User;
  organization: Organization;
  team: Team;
  emailsCentralized: string[];
  previousRoles: string[];
  currentRoles: string[];
  frontendUrl: string;
}
