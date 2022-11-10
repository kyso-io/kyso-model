import { KysoEvent } from './kyso-event';

export interface KysoTraceabilityCreateEvent extends KysoEvent {
  user_id: string | null;
  email: string | null;
  endpoint: string;
  http_response_code: number;
  user_agent: string;
  ip_address: string;
  request_method: string;
  request_body: { [key: string]: any } | null;
  country: string | null;
}
