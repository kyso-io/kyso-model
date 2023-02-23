import { AnalyticsSource } from '../enums/analytics-source.enum';
import { KysoEvent } from './kyso-event';

export interface KysoAnalyticsReportView extends KysoEvent {
  report_id: string;
  user_id: string | null;
  location: string;
  coords: {
    lat: number;
    lng: number;
  } | null;
  device: any | null;
  source: AnalyticsSource;
}
