import { AnalyticsSource } from '../enums/analytics-source.enum';
import { KysoEvent } from './kyso-event';

export interface KysoAnalyticsReportDownload extends KysoEvent {
  report_id: string;
  user_id: string | null;
  source: AnalyticsSource;
}
