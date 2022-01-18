import { IsEnum, IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { LoginProviderEnum } from '../enums/login-provider.enum';

export class UserAccount {
  @IsEnum(LoginProviderEnum)
  public type: LoginProviderEnum;

  @IsNotEmpty()
  public accountId: string | null;

  @IsNotEmptyObject()
  public payload: any;

  constructor() {
    this.type = LoginProviderEnum.KYSO;
    this.accountId = null;
    this.payload = null;
  }
}
