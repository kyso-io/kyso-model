import { Invitation } from '../models/invitation.model';
import { Organization } from '../models/organization.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoInvitationsTeamCreateEvent extends KysoEvent {
  user: User;
  roles: string[];
  organization: Organization;
  team: Team;
  invitation: Invitation;
  frontendUrl: string;
}
