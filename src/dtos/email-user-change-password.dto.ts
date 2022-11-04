import { IsEmail, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class EmailUserChangePasswordDTO extends BaseModel implements StaticImplements<ApiMethods<EmailUserChangePasswordDTO>, typeof EmailUserChangePasswordDTO> {
  @IsEmail()
  public email: string;

  @IsString()
  // @IsNotEmpty() Could be empty if ENABLE_RECAPTCHA2 is false
  public captchaToken: string;

  constructor(email: string, captchaToken: string) {
    super();
    this.email = email;
    this.captchaToken = captchaToken;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): EmailUserChangePasswordDTO {
    return new EmailUserChangePasswordDTO('', '');
  }

  static examples(): { [key: string]: { value: EmailUserChangePasswordDTO } } {
    return {
      EmailUserChangePasswordDTO: {
        value: EmailUserChangePasswordDTO.createEmpty(),
      },
    };
  }
}
