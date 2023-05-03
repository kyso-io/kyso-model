import { IsArray, IsInt, IsObject, Min } from '@nestjs/class-validator';
import { AnalyticsSource } from '../enums/analytics-source.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class ReportAnalyticsDownloads extends BaseModel implements StaticImplements<ApiMethods<ReportAnalyticsDownloads>, typeof ReportAnalyticsDownloads> {
  @IsInt()
  @Min(0)
  public count: number;

  @IsArray()
  public last_items: {
    timestamp: Date;
    user_id: string;
    source: AnalyticsSource;
  }[];

  @IsObject()
  public sources: { [key: string]: number };

  constructor() {
    super();
    this.count = 0;
    this.last_items = [];
    this.sources = {};
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): ReportAnalyticsDownloads {
    return new ReportAnalyticsDownloads();
  }

  static examples(): { [key: string]: { value: ReportAnalyticsDownloads } } {
    return {
      Tag: {
        value: ReportAnalyticsDownloads.createEmpty(),
      },
    };
  }
}
