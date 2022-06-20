import { UserVerification } from '../models/user-verification.model';
import { User } from '../models/user.model';

export interface KysoUsersVerificationEmailEvent {
  user: User;
  userVerification: UserVerification;
  frontendUrl: string;
}
