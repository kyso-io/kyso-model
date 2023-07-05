import { Organization } from '../models/organization.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoOrganizationsAddMemberEvent extends KysoEvent {
  userA: User;
  userB: User;
  organization: Organization;
  emailsCentralized: string[];
  role: string;
  frontendUrl: string;
}
