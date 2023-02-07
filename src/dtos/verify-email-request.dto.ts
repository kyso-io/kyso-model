import { IsEmail, IsUUID } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class VerifyEmailRequestDTO extends BaseDto implements StaticImplements<ApiMethods<VerifyEmailRequestDTO>, typeof VerifyEmailRequestDTO> {
  @IsEmail()
  public email: string;

  @IsUUID()
  public token: string;

  constructor(email: string, token: string) {
    super();
    this.email = email;
    this.token = token;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): VerifyEmailRequestDTO {
    return new VerifyEmailRequestDTO('', '');
  }

  static examples(): { [key: string]: { value: VerifyEmailRequestDTO } } {
    return {
      VerifyEmailRequestDTO: {
        value: VerifyEmailRequestDTO.createEmpty(),
      },
    };
  }
}
