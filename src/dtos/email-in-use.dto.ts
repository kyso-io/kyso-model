import { IsEmail } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class EmailInUseDTO extends BaseDto implements StaticImplements<ApiMethods<EmailInUseDTO>, typeof EmailInUseDTO> {
  @IsEmail()
  public email: string;

  constructor(email: string) {
    super();
    this.email = email;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): EmailInUseDTO {
    return new EmailInUseDTO('');
  }

  static examples(): { [key: string]: { value: EmailInUseDTO } } {
    return {
      UserChangePasswordDTO: {
        value: EmailInUseDTO.createEmpty(),
      },
    };
  }
}
