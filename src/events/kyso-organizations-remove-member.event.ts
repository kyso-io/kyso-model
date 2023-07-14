import { Organization } from '../models/organization.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoOrganizationsRemoveMemberEvent extends KysoEvent {
  userCreatingAction: User;
  user: User;
  organization: Organization;
  frontendUrl: string;
}
