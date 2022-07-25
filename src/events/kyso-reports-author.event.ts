import { Organization } from '../models/organization.model';
import { Report } from '../models/report.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';

export interface KysoReportsAuthorEvent {
  user: User;
  author: User;
  organization: Organization;
  team: Team;
  report: Report;
  frontendUrl: string;
}
