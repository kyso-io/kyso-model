import { User } from '../models/user.model';
import { KysoEventOwner } from './kyso-event-owner';

export interface KysoUsersDeleteEvent extends KysoEventOwner {
  user: User;
}
