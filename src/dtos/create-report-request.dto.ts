import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { CreateReport } from './create-report.dto';

export class CreateReportRequest {
  @ApiModelProperty({
    required: false,
  })
  public teams: string;

  @ApiModelProperty({
    required: true,
    type: CreateReport,
  })
  public reports: CreateReport | CreateReport[];

  constructor(teams: string, reports: CreateReport | CreateReport[]) {
    this.teams = teams;
    this.reports = reports;
  }
}
