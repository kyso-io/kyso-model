import { Organization } from '../models/organization.model';
import { Report } from '../models/report.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoReportsMoveEvent extends KysoEvent {
  user: User;
  sourceTrganization: Organization;
  sourceTeam: Team;
  targetOrganization: Organization;
  targetTeam: Team;
  report: Report;
  frontendUrl: string;
}
