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

  constructor(type: LoginProviderEnum, accountId: string | null, username: string | null, accessToken?: string | null, payload?: any) {
    super();
    this.type = type;
    this.username = username;
    this.accountId = accountId;
    this.accessToken = accessToken;
    this.payload = payload || null;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UserAccount {
    return new UserAccount(LoginProviderEnum.KYSO, '', '', '', {});
  }

  static examples(): { [key: string]: { value: UserAccount } } {
    return {
      UserAccount: {
        value: UserAccount.createEmpty(),
      },
    };
  }
}
