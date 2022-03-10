import { IsEnum, IsNotEmpty } from 'class-validator';
import { LoginProviderEnum } from '../enums/login-provider.enum';

export class AddUserAccountDTO {
  @IsEnum(LoginProviderEnum)
  public provider!: LoginProviderEnum;

  @IsNotEmpty()
  public code!: string;
}