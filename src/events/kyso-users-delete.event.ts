import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';
import { KysoEventOwner } from './kyso-event-owner';

export interface KysoUsersDeleteEvent extends KysoEventOwner, KysoEvent {
  user: User;
}
