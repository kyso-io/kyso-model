import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class EmailUserChangePasswordDTO {
  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public captchaToken: string;

  constructor(email: string, captchaToken: string) {
    this.email = email;
    this.captchaToken = captchaToken;
  }
}
