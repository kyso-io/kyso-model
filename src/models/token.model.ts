import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { IsAlphanumeric, IsEmail, IsNotEmpty, IsObject, IsUrl } from 'class-validator';
import { TokenPermissions } from './token-permissions.model';

export class Token {
  @ApiModelProperty()
  @IsNotEmpty()
  public id: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsAlphanumeric()
  public username: string;

  @ApiModelProperty()
  @IsAlphanumeric()
  @IsNotEmpty()
  public nickname: string;

  @ApiModelProperty()
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsAlphanumeric()
  public plan: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsObject()
  public permissions: TokenPermissions;

  @ApiModelProperty()
  @IsUrl()
  @IsNotEmpty()
  public avatar_url: string;

  constructor(id: string, username: string, nickname: string, email: string, plan: string, permissions: TokenPermissions, avatar_url: string) {
    this.id = id;
    this.nickname = nickname;
    this.username = username;
    this.email = email;
    this.plan = plan;
    this.permissions = permissions;
    this.avatar_url = avatar_url;
  }
}
