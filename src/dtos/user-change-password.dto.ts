import { IsEmail, IsNotEmpty, IsString, IsUUID } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class UserChangePasswordDTO extends BaseDto implements StaticImplements<ApiMethods<UserChangePasswordDTO>, typeof UserChangePasswordDTO> {
  @IsEmail()
  public email: string;

  @IsUUID()
  public token: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  constructor(email: string, token: string, password: string) {
    super();
    this.email = email;
    this.token = token;
    this.password = password;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UserChangePasswordDTO {
    return new UserChangePasswordDTO('', '', '');
  }

  static examples(): { [key: string]: { value: UserChangePasswordDTO } } {
    return {
      UserChangePasswordDTO: {
        value: UserChangePasswordDTO.createEmpty(),
      },
    };
  }
}
