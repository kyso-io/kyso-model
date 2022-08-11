import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';
import { KysoEventOwner } from './kyso-event-owner';

export interface KysoUsersUpdateEvent extends KysoEventOwner, KysoEvent {
  user: User;
}
