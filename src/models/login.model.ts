
import { IsNotEmpty, IsOptional } from 'class-validator';
import { LoginProviderEnum } from '../enums/login-provider.enum';

export class Login {
  @IsOptional()
  public username?: string;

  @IsNotEmpty()
  
  public password: string;

  @IsNotEmpty()
  public provider: LoginProviderEnum;

  constructor(password: string, provider: LoginProviderEnum, username?: string) {
    this.password = password;
    this.provider = provider;
    this.username = username;
  }
}
