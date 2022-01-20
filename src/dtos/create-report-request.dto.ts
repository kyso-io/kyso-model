import { CreateReport } from './create-report.dto';

export class CreateReportRequest {
  public teams: string;

  public reports: CreateReport | CreateReport[];

  constructor(teams: string, reports: CreateReport | CreateReport[]) {
    this.teams = teams;
    this.reports = reports;
  }
}
