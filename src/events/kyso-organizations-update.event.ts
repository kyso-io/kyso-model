import { Organization } from '../models/organization.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoOrganizationsUpdateEvent extends KysoEvent {
  user: User;
  organization: Organization;
}
