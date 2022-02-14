import { IsEnum, IsNotEmpty, IsObject, IsOptional, ValidateIf } from 'class-validator';
import { LoginProviderEnum } from '../enums/login-provider.enum';

export class Login {
  @IsNotEmpty()
  public username: string;

  @IsOptional()
  @IsNotEmpty()
  public password: string;

  @IsEnum(LoginProviderEnum)
  public provider: LoginProviderEnum;

  @ValidateIf((o: Login) => o?.payload && o.payload !== null)
  @IsObject()
  public payload: any;

  constructor(password: string, provider: LoginProviderEnum, username: string, payload: any) {
    this.password = password;
    this.provider = provider;
    this.username = username;
    this.payload = payload;
  }
}
