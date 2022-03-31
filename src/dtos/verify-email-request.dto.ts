import { IsEmail, IsUUID } from 'class-validator';

export class VerifyEmailRequestDTO {
  @IsEmail()
  public email: string;

  @IsUUID()
  public token: string;

  constructor(email: string, token: string) {
    this.email = email;
    this.token = token;
  }
}
