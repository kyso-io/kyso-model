import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class UserForgotPassword extends BaseModel implements StaticImplements<ApiMethods<UserForgotPassword>, typeof UserForgotPassword> {
  public email: string;
  public token: string;
  public user_id: string;
  public expires_at: Date;
  public modified_at: Date | null;

  constructor(email: string, token: string, user_id: string, expires_at: Date) {
    super();
    this.email = email;
    this.token = token;
    this.user_id = user_id;
    this.expires_at = expires_at;
    this.modified_at = null;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UserForgotPassword {
    return new UserForgotPassword('', '', '', new Date());
  }

  static examples(): { [key: string]: { value: UserForgotPassword } } {
    return {
      UserForgotPassword: {
        value: UserForgotPassword.createEmpty(),
      },
    };
  }
}
