import { Organization } from '../models/organization.model';
import { RequestAccess } from '../models/request-access.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoTeamRequestAccessCreatedEvent extends KysoEvent {
  request: RequestAccess;
  organization: Organization;
  team: Team;
  requesterUser: User;
  organizationAdmins: string[];
  frontendUrl: string;
}
