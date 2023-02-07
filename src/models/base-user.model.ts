import { IsAlphanumeric, IsArray, IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl, Length } from '@nestjs/class-validator';
import { GlobalPermissionsEnum } from '../enums/general-permissions.enum';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class BaseUser extends BaseModel implements StaticImplements<ApiMethods<BaseUser>, typeof BaseUser> {
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
  @IsOptional()
  public avatar_url: string;

  @IsUrl()
  @IsOptional()
  public background_image_url: string;

  @IsBoolean()
  public email_verified: boolean;

  @IsBoolean()
  public show_captcha: boolean;

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
    background_image_url: string,
    emailVerified: boolean,
    global_permissions: GlobalPermissionsEnum[],
    _id?: string,
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
    this.background_image_url = background_image_url;
    this.email_verified = emailVerified;
    this.global_permissions = global_permissions;
    this.show_captcha = true;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): BaseUser {
    return new BaseUser('', '', '', '', LoginProviderEnum.KYSO, '', '', '', '', '', '', false, []);
  }

  static examples(): { [key: string]: { value: BaseUser } } {
    return {
      BaseUser: {
        value: BaseUser.createEmpty(),
      },
    };
  }
}
