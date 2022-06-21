import { Organization } from '../models/organization.model';

export interface KysoOrganizationsCreateEvent {
  organization: Organization;
}
