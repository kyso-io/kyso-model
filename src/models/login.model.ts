import { IsEnum, IsLowercase, IsNotEmpty, IsOptional, IsString, ValidateIf } from '@nestjs/class-validator';
import { IsType } from '../decorators/is-type';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class Login extends BaseModel implements StaticImplements<ApiMethods<Login>, typeof Login> {
  @IsString()
  @IsLowercase()
  protected _email: string;

  public get email() {
    if (this._email) {
      return this._email.toLowerCase();
    } else {
      return '';
    }
  }

  public set email(theEmail: string) {
    this._email = theEmail.toLowerCase();
  }

  @IsOptional()
  @IsNotEmpty()
  public password: string;

  @IsOptional()
  @IsNotEmpty()
  public kysoInstallUrl: string;

  @IsEnum(LoginProviderEnum)
  public provider: LoginProviderEnum;

  @ValidateIf((o: Login) => o?.payload && o.payload !== null)
  @IsType(['string', 'object'])
  public payload: any;

  constructor(password: string, provider: LoginProviderEnum, email: string, payload: any, kysoInstallUrl?: any) {
    super();
    this.password = password;
    this.provider = provider;
    this._email = email ? email.toLowerCase() : email;
    this.payload = payload;
    this.kysoInstallUrl = kysoInstallUrl;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): Login {
    return new Login('', LoginProviderEnum.KYSO, '', {});
  }

  static examples(): { [key: string]: { value: Login } } {
    return {
      Login: {
        value: Login.createEmpty(),
      },
    };
  }
}
