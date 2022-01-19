import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { IsAlphanumeric, IsArray, IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsUrl, Length } from 'class-validator';
import { GlobalPermissionsEnum } from '../enums/general-permissions.enum';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { BaseModel } from './base.model';

export class BaseUser extends BaseModel {
  @IsEmail()
  @IsNotEmpty()
  @ApiModelProperty()
  public email: string;

  @IsNotEmpty()
  @ApiModelProperty()
  public username: string;

  @IsNotEmpty()
  @ApiModelProperty()
  public nickname: string;

  @IsNotEmpty()
  @ApiModelProperty({
    enumName: LoginProviderEnum.constructor.name,
  })
  public provider: LoginProviderEnum;

  @Length(0, 500)
  @ApiModelProperty({
    maxLength: 500,
  })
  public bio: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  @ApiModelProperty()
  public plan: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiModelProperty()
  public avatar_url: string;

  @IsBoolean()
  @ApiModelProperty()
  public email_verified: boolean;

  @IsArray()
  @IsEnum(GlobalPermissionsEnum, { each: true })
  @ApiModelProperty()
  public global_permissions: GlobalPermissionsEnum[];

  constructor(
    email: string,
    username: string,
    nickname: string,
    provider: LoginProviderEnum,
    bio: string,
    plan: string,
    avatarUrl: string,
    emailVerified: boolean,
    global_permissions: GlobalPermissionsEnum[],
    _id?: string
  ) {
    super();
    this.email = email;
    this.username = username;
    this.nickname = nickname;
    this.provider = provider;
    this.bio = bio;
    this.plan = plan;
    this.avatar_url = avatarUrl;
    this.email_verified = emailVerified;
    this.global_permissions = global_permissions;
  }
}
