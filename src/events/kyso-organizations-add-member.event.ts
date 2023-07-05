import { Organization } from '../models/organization.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoOrganizationsAddMemberEvent extends KysoEvent {
  userCreatingAction: User | null;
  userReceivingAction: User;
  organization: Organization;
  emailsCentralized: string[];
  role: string;
  frontendUrl: string;
}
