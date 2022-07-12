import { Organization } from '../models/organization.model';
import { User } from '../models/user.model';

export interface KysoOrganizationsDeleteEvent {
  user: User;
  organization: Organization;
}
