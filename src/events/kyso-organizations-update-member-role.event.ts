import { Organization } from '../models/organization.model';
import { User } from '../models/user.model';

export interface KysoOrganizationsUpdateMemberRoleEvent {
  user: User;
  organization: Organization;
  emailsCentralized: string[];
  previousRole: string;
  currentRole: string;
  frontendUrl: string;
}
