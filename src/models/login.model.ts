import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { LoginProviderEnum } from '../enums/login-provider.enum';

export class Login {
  @IsOptional()
  @ApiModelProperty({
    description: `Username to login. Only required in kyso provider. This field is ignored in the rest of providers`,
    required: false,
  })
  public username?: string;

  @IsNotEmpty()
  @ApiModelProperty()
  public password: string;

  @IsNotEmpty()
  @ApiModelProperty({
    description: `Authentication provider in which the user wants to rely. See schema for details`,
    enumName: LoginProviderEnum.constructor.name,
  })
  public provider: LoginProviderEnum;

  constructor(password: string, provider: LoginProviderEnum, username?: string) {
    this.password = password;
    this.provider = provider;
    this.username = username;
  }
}
