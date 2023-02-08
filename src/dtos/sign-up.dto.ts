import { IsAlphanumeric, IsBoolean, IsEmail, IsNotEmpty, IsOptional } from '@nestjs/class-validator';
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

  @IsOptional()
  @IsBoolean()
  /**
   * If true, don't send any notification to the new created user. Useful for massive creation of users with the CLI
   */
  public silent: boolean;

  constructor(email: string, username: string, display_name: string, password: string, silent?: boolean) {
    super();
    this.email = email;
    this.username = username;
    this.display_name = display_name;
    this.password = password;

    if (silent) {
      this.silent = silent;
    } else {
      this.silent = false;
    }
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): SignUpDto {
    return new SignUpDto('', '', '', '', false);
  }

  static examples(): { [key: string]: { value: SignUpDto } } {
    return {
      SignUpDto: {
        value: SignUpDto.createEmpty(),
      },
    };
  }
}
