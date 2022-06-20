import { Organization } from '../models/organization.model';
import { User } from '../models/user.model';

export interface KysoOrganizationsRemoveMemberEvent {
  user: User;
  organization: Organization;
  emailsCentralized: string[];
  frontendUrl: string;
}
