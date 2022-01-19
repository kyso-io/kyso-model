import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class BatchReportCreation {
  @ApiModelProperty({
    required: true,
    enum: ['ERROR', 'OK'],
  })
  status: string;

  @ApiModelProperty({
    required: false,
  })
  reason: string | null;

  constructor(status: string, reason: string | null) {
    this.status = status;
    this.reason = reason;
  }
}
