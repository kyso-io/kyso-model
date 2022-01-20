import { CreateReportDTO } from './create-report.dto';

export class CreateReportRequestDTO {
  public teams: string;

  public reports: CreateReportDTO | CreateReportDTO[];

  constructor(teams: string, reports: CreateReportDTO | CreateReportDTO[]) {
    this.teams = teams;
    this.reports = reports;
  }
}
