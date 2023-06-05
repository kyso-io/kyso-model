import { IsArray, IsNotEmpty, IsObject, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';
import { CommentInteraction } from './comment-interaction.model';
import { InlineCommentInteraction } from './inline-comment-interaction.model';
import { ReportAnalyticsDownloads } from './report-analytics-downloads.model';
import { ReportAnalyticsShares } from './report-analytics-shares.model';
import { ReportAnalyticsViews } from './report-analytics-views.model';

export class ReportAnalytics extends BaseModel implements StaticImplements<ApiMethods<ReportAnalytics>, typeof ReportAnalytics> {
  @IsNotEmpty()
  @IsString()
  public report_id: string;

  @IsObject()
  public downloads: ReportAnalyticsDownloads;

  @IsObject()
  public views: ReportAnalyticsViews;

  @IsObject()
  public shares: ReportAnalyticsShares;

  @IsArray()
  public last_comments: CommentInteraction[];

  @IsArray()
  public last_tasks: InlineCommentInteraction[];

  constructor(report_id: string) {
    super();
    this.report_id = report_id;
    this.downloads = new ReportAnalyticsDownloads();
    this.views = new ReportAnalyticsViews();
    this.shares = new ReportAnalyticsShares();
    this.last_comments = [];
    this.last_tasks = [];
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): ReportAnalytics {
    return new ReportAnalytics('');
  }

  static examples(): { [key: string]: { value: ReportAnalytics } } {
    return {
      Tag: {
        value: ReportAnalytics.createEmpty(),
      },
    };
  }
}
