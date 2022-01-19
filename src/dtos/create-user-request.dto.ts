import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { IsAlphanumeric } from 'class-validator';
import { GlobalPermissionsEnum } from '../enums/general-permissions.enum';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { BaseUser } from '../models/base-user.model';

export class CreateUserRequest extends BaseUser {
  @ApiModelProperty()
  @IsAlphanumeric()
  public password: string;

  constructor(
    email: string,
    username: string,
    nickname: string,
    provider: LoginProviderEnum,
    bio: string,
    plan: string,
    avatar_url: string,
    email_verified: boolean,
    global_permissions: GlobalPermissionsEnum[],
    password: string
  ) {
    super(email, username, nickname, provider, bio, plan, avatar_url, email_verified, global_permissions);
    this.password = password;
  }
}
