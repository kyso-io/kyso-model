import { IsEnum, IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';
import { IsType } from '../decorators/is-type';
import { LoginProviderEnum } from '../enums/login-provider.enum';

export class Login {
  @IsString()
  public username!: string;

  @IsOptional()
  @IsNotEmpty()
  public password!: string;

  @IsEnum(LoginProviderEnum)
  public provider!: LoginProviderEnum;

  @ValidateIf((o: Login) => o?.payload && o.payload !== null)
  @IsType(['string', 'object'])
  public payload!: any;

  constructor(password: string, provider: LoginProviderEnum, username: string, payload: any) {
    this.password = password;
    this.provider = provider;
    this.username = username;
    this.payload = payload;
  }
}
