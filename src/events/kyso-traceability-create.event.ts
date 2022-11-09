import { KysoEvent } from './kyso-event';

export interface KysoTraceabilityCreateEvent extends KysoEvent {
  user_id: string;
  email: string;
  endpoint: string;
  http_code_response: number;
  user_agent: string;
  ip_address: string;
  request_method: string;
  request_body: { [key: string]: any };
}
