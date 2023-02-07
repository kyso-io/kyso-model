import { IsAlphanumeric, IsEmail, IsNotEmpty } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class SignUpDto extends BaseDto implements StaticImplements<ApiMethods<SignUpDto>, typeof SignUpDto> {
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public username: string;

  @IsNotEmpty()
  public display_name: string;

  @IsAlphanumeric()
  public password: string;

  constructor(email: string, username: string, display_name: string, password: string) {
    super();
    this.email = email;
    this.username = username;
    this.display_name = display_name;
    this.password = password;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): SignUpDto {
    return new SignUpDto('', '', '', '');
  }

  static examples(): { [key: string]: { value: SignUpDto } } {
    return {
      SignUpDto: {
        value: SignUpDto.createEmpty(),
      },
    };
  }
}
