import { IsEnum, IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';
import { IsType } from '../decorators/is-type';
import { LoginProviderEnum } from '../enums/login-provider.enum';

export class Login {
  @IsString()
  public email!: string;

  @IsOptional()
  @IsNotEmpty()
  public password!: string;

  @IsOptional()
  @IsNotEmpty()
  public kysoInstallUrl!: string;

  @IsEnum(LoginProviderEnum)
  public provider!: LoginProviderEnum;

  @ValidateIf((o: Login) => o?.payload && o.payload !== null)
  @IsType(['string', 'object'])
  public payload!: any;

  constructor(password: string, provider: LoginProviderEnum, email: string, payload: any, kysoInstallUrl?: any) {
    this.password = password;
    this.provider = provider;
    this.email = email;
    this.payload = payload;
    this.kysoInstallUrl = kysoInstallUrl;
  }
}
