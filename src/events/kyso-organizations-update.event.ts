import { Organization } from '../models/organization.model';
import { User } from '../models/user.model';

export interface KysoOrganizationsUpdateEvent {
  user: User;
  organization: Organization;
}
