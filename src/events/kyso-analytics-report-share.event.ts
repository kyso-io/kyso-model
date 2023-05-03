import { KysoEvent } from './kyso-event';

export interface KysoAnalyticsReportShare extends KysoEvent {
  report_id: string;
  user_id: string | null;
}
