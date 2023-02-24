import { AnalyticsSource } from '../enums/analytics-source.enum';
import { DeviceDetector } from '../interfaces/device-detector';
import { KysoEvent } from './kyso-event';

export interface KysoAnalyticsReportView extends KysoEvent {
  report_id: string;
  user_id: string | null;
  location: string;
  coords: {
    lat: number;
    lng: number;
  } | null;
  device: DeviceDetector | null;
  source: AnalyticsSource;
}
