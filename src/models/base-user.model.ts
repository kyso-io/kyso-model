
import { IsAlphanumeric, IsArray, IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsUrl, Length } from 'class-validator';
import { GlobalPermissionsEnum } from '../enums/general-permissions.enum';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { BaseModel } from './base.model';

export class BaseUser extends BaseModel {
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsNotEmpty()
  public username: string;

  @IsNotEmpty()
  public nickname: string;

  @IsNotEmpty()
  public provider: LoginProviderEnum;

  @Length(0, 500)
  public bio: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  public plan: string;

  @IsUrl()
  @IsNotEmpty()
  public avatar_url: string;

  @IsBoolean()
  public email_verified: boolean;

  @IsArray()
  @IsEnum(GlobalPermissionsEnum, { each: true })
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
