import { Organization } from '../models/organization.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoTeamsUpdateMemberRolesEvent extends KysoEvent {
  userCreatingAction: User | null;
  userReceivingAction: User;
  organization: Organization;
  team: Team;
  previousRoles: string[];
  currentRoles: string[];
  frontendUrl: string;
}
