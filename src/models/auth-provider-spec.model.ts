import { IsEnum, IsNotEmpty, IsObject } from '@nestjs/class-validator';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { PingIdSAMLSpec } from './auth-provider/pingid-saml-spec.model';
import { BaseModel } from './base.model';

export class AuthProviderSpec extends BaseModel implements StaticImplements<ApiMethods<AuthProviderSpec>, typeof AuthProviderSpec> {
  @IsNotEmpty()
  @IsEnum(LoginProviderEnum)
  public type: LoginProviderEnum;

  @IsObject()
  @IsNotEmpty()
  public options: PingIdSAMLSpec | any;

  constructor(type: LoginProviderEnum, options: PingIdSAMLSpec | any) {
    super();
    this.type = type;
    this.options = options;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): AuthProviderSpec {
    return new AuthProviderSpec(LoginProviderEnum.KYSO, {});
  }

  static examples(): { [key: string]: { value: AuthProviderSpec } } {
    return {
      AuthProviderSpec: {
        value: AuthProviderSpec.createEmpty(),
      },
    };
  }
}
