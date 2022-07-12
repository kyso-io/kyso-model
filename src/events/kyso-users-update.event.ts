import { User } from '../models/user.model';
import { KysoEventOwner } from './kyso-event-owner';

export interface KysoUsersUpdateEvent extends KysoEventOwner {
  user: User;
}
