import { IsMongoId } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class PinnedReport extends BaseModel implements StaticImplements<ApiMethods<PinnedReport>, typeof PinnedReport> {
  @IsMongoId()
  public report_id: string;

  @IsMongoId()
  public user_id: string;

  constructor(report_id: string, user_id: string) {
    super();
    this.report_id = report_id;
    this.user_id = user_id;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): PinnedReport {
    return new PinnedReport('', '');
  }

  static examples(): { [key: string]: { value: PinnedReport } } {
    return {
      PinnedReport: {
        value: PinnedReport.createEmpty(),
      },
    };
  }
}
