import { UserForgotPassword } from '../models/user-forgot-password.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoUsersRecoveryPasswordEvent extends KysoEvent {
  user: User;
  userForgotPassword: UserForgotPassword;
  frontendUrl: string;
}
