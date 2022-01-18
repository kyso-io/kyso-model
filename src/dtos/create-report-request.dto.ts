import { ApiProperty } from '@nestjs/swagger';
import { CreateReport } from './create-report.dto';

export class CreateReportRequest {
  @ApiProperty({
    required: false,
  })
  public teams: string;

  @ApiProperty({
    required: true,
    type: CreateReport,
  })
  public reports: CreateReport | CreateReport[];

  constructor(teams: string, reports: CreateReport | CreateReport[]) {
    this.teams = teams;
    this.reports = reports;
  }
}
