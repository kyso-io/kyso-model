import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class EmailUserChangePasswordDTO {
  @IsEmail()
  public email: string;

  @IsString()
  // @IsNotEmpty() Could be empty if ENABLE_RECAPTCHA2 is false
  public captchaToken: string;

  constructor(email: string, captchaToken: string) {
    this.email = email;
    this.captchaToken = captchaToken;
  }
}
