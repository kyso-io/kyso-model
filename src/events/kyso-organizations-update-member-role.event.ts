import { Organization } from '../models/organization.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoOrganizationsUpdateMemberRoleEvent extends KysoEvent {
  user: User;
  organization: Organization;
  emailsCentralized: string[];
  previousRole: string;
  currentRole: string;
  frontendUrl: string;
}
