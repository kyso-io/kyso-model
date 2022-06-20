import { UserForgotPassword } from '../models/user-forgot-password.model';
import { User } from '../models/user.model';

export interface KysoUsersRecoveryPasswordEvent {
  user: User;
  userForgotPassword: UserForgotPassword;
  frontendUrl: string;
}
