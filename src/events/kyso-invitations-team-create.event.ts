import { Invitation } from '../models/invitation.model';
import { Organization } from '../models/organization.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';

export interface KysoInvitationsTeamCreateEvent {
  user: User;
  roles: string[];
  organization: Organization;
  team: Team;
  invitation: Invitation;
  frontendUrl: string;
}
