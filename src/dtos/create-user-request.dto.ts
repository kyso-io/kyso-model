import { IsAlphanumeric } from 'class-validator';
import { GlobalPermissionsEnum } from '../enums/general-permissions.enum';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { BaseUser } from '../models/base-user.model';

export class CreateUserRequestDTO extends BaseUser {
  @IsAlphanumeric()
  public password: string;

  constructor(
    email: string,
    username: string,
    name: string,
    nickname: string,
    provider: LoginProviderEnum,
    bio: string,
    location: string,
    link: string,
    plan: string,
    avatar_url: string,
    background_image_url: string,
    email_verified: boolean,
    global_permissions: GlobalPermissionsEnum[],
    password: string
  ) {
    super(email, username, name, nickname, provider, bio, location, link, plan, avatar_url, background_image_url, email_verified, global_permissions);
    this.password = password;
  }
}
