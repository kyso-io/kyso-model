import { IsArray, IsInt, Min } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class ReportAnalyticsShares extends BaseModel implements StaticImplements<ApiMethods<ReportAnalyticsShares>, typeof ReportAnalyticsShares> {
  @IsInt()
  @Min(0)
  public count: number;

  @IsArray()
  public last_items: {
    timestamp: Date;
    user_id: string;
  }[];

  constructor() {
    super();
    this.count = 0;
    this.last_items = [];
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): ReportAnalyticsShares {
    return new ReportAnalyticsShares();
  }

  static examples(): { [key: string]: { value: ReportAnalyticsShares } } {
    return {
      Tag: {
        value: ReportAnalyticsShares.createEmpty(),
      },
    };
  }
}
