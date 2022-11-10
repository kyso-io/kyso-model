import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class UserVerification extends BaseModel implements StaticImplements<ApiMethods<UserVerification>, typeof UserVerification> {
  public email: string;
  public token: string;
  public user_id: string;
  public expires_at: Date;
  public verified_at: Date | null;

  constructor(email: string, token: string, user_id: string, expires_at: Date) {
    super();
    this.email = email;
    this.token = token;
    this.user_id = user_id;
    this.expires_at = expires_at;
    this.verified_at = null;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UserVerification {
    return new UserVerification('', '', '', new Date());
  }

  static examples(): { [key: string]: { value: UserVerification } } {
    return {
      UserVerification: {
        value: UserVerification.createEmpty(),
      },
    };
  }
}
