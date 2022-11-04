import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class BatchReportCreationDTO extends BaseModel implements StaticImplements<ApiMethods<BatchReportCreationDTO>, typeof BatchReportCreationDTO> {
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
