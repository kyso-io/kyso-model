import { Organization } from '../models/organization.model';
import { RequestAccess } from '../models/request-access.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoOrganizationRequestAccessCreatedEvent extends KysoEvent {
  request: RequestAccess;
  organization: Organization;
  requesterUser: User;
  organizationAdmins: User[];
  frontendUrl: string;
}
