import { Organization } from '../models/organization.model';
import { Report } from '../models/report.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoReportsMentionsEvent extends KysoEvent {
  to: string | string[];
  creator: User;
  users: User[];
  organization: Organization;
  team: Team;
  report: Report;
  frontendUrl: string;
}