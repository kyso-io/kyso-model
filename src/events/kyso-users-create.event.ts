import { User } from '../models/user.model';

export interface KysoUsersCreateEvent {
  user: User;
}
