import { Organization } from '../models/organization.model';
import { User } from '../models/user.model';

export interface KysoOrganizationsAddMemberEvent {
  user: User;
  organization: Organization;
  emailsCentralized: string[];
  role: string;
  frontendUrl: string;
}
