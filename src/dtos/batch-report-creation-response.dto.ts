import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class BatchReportCreationDTO extends BaseDto implements StaticImplements<ApiMethods<BatchReportCreationDTO>, typeof BatchReportCreationDTO> {
  status: string;
  reason: string | null;

  constructor(status: string, reason: string | null) {
    super();
    this.status = status;
    this.reason = reason;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): BatchReportCreationDTO {
    return new BatchReportCreationDTO('', null);
  }

  static examples(): { [key: string]: { value: BatchReportCreationDTO } } {
    return {
      BatchReportCreationDTO: {
        value: BatchReportCreationDTO.createEmpty(),
      },
    };
  }
}
