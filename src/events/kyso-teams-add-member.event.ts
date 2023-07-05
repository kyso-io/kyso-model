import { Organization } from '../models/organization.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoTeamsAddMemberEvent extends KysoEvent {
  userA: User;
  userB: User;
  organization: Organization;
  team: Team;
  emailsCentralized: string[];
  roles: string[];
  frontendUrl: string;
}
