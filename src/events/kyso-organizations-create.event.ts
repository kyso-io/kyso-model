import { Organization } from '../models/organization.model';
import { User } from '../models/user.model';

export interface KysoOrganizationsCreateEvent {
  user: User;
  organization: Organization;
}
