import { IsEnum, IsNotEmpty, IsNotEmptyObject, IsOptional } from 'class-validator';
import { LoginProviderEnum } from '../enums/login-provider.enum';

export class UserAccount {
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
    this.type = LoginProviderEnum.KYSO;
    this.username = null;
    this.accountId = null;
    this.payload = null;
    this.accessToken = null;
  }
}
