import { IsMongoId } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class StarredReport extends BaseModel implements StaticImplements<ApiMethods<StarredReport>, typeof StarredReport> {
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

  static createEmpty(): StarredReport {
    return new StarredReport('', '');
  }

  static examples(): { [key: string]: { value: StarredReport } } {
    return {
      StarredReport: {
        value: StarredReport.createEmpty(),
      },
    };
  }
}
