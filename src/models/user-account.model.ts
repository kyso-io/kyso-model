import { IsEnum, IsNotEmpty, IsNotEmptyObject, IsOptional } from 'class-validator';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class UserAccount extends BaseModel implements StaticImplements<ApiMethods<UserAccount>, typeof UserAccount> {
  @IsEnum(LoginProviderEnum)
  public type: LoginProviderEnum;

  @IsNotEmpty()
  public accountId: string | null;

  @IsNotEmpty()
  public username: string | null;

  @IsOptional()
  public accessToken?: string | null;

  @IsNotEmptyObject()
  public payload?: any;

  constructor() {
    super();
    this.type = LoginProviderEnum.KYSO;
    this.username = null;
    this.accountId = null;
    this.payload = null;
    this.accessToken = null;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UserAccount {
    return new UserAccount();
  }

  static examples(): { [key: string]: { value: UserAccount } } {
    return {
      UserAccount: {
        value: UserAccount.createEmpty(),
      },
    };
  }
}
