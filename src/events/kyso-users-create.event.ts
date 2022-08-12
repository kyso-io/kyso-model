import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoUsersCreateEvent extends KysoEvent {
  user: User;
}
