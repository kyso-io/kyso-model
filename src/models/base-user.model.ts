import { IsAlphanumeric, IsArray, IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsString, IsUrl, Length } from 'class-validator';
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
  public name: string;

  @IsNotEmpty()
  public display_name: string;

  @IsNotEmpty()
  public provider: LoginProviderEnum;

  @Length(0, 500)
  public bio: string;

  @IsString()
  public location: string;

  @IsString()
  public link: string;

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
    name: string,
    display_name: string,
    provider: LoginProviderEnum,
    bio: string,
    location: string,
    link: string,
    plan: string,
    avatarUrl: string,
    emailVerified: boolean,
    global_permissions: GlobalPermissionsEnum[],
    _id?: string
  ) {
    super();
    this.email = email;
    this.username = username;
    this.name = name;
    this.display_name = display_name;
    this.provider = provider;
    this.bio = bio;
    this.location = location;
    this.link = link;
    this.plan = plan;
    this.avatar_url = avatarUrl;
    this.email_verified = emailVerified;
    this.global_permissions = global_permissions;
  }
}
