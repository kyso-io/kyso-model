import { BaseModel } from './base.model';

export class UserVerification extends BaseModel {
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
}