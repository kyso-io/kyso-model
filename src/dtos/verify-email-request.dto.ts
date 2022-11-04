import { IsEmail, IsUUID } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class VerifyEmailRequestDTO extends BaseModel implements StaticImplements<ApiMethods<VerifyEmailRequestDTO>, typeof VerifyEmailRequestDTO> {
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
