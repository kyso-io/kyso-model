import { UserVerification } from '../models/user-verification.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoUsersVerificationEmailEvent extends KysoEvent {
  user: User;
  userVerification: UserVerification;
  frontendUrl: string;
}
