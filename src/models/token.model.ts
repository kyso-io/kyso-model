import { IsAlphanumeric, IsBoolean, IsEmail, IsNotEmpty, IsObject, IsOptional, IsUrl } from 'class-validator';
import { GlobalPermissionsEnum } from '../enums/general-permissions.enum';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';
import { TokenPermissions } from './token-permissions.model';

export class Token extends BaseModel implements StaticImplements<ApiMethods<Token>, typeof Token> {
  @IsNotEmpty()
  @IsAlphanumeric()
  public name: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  public username: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  public nickname: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  public plan: string;

  @IsOptional()
  @IsObject()
  public permissions?: TokenPermissions;

  @IsUrl()
  @IsNotEmpty()
  public avatar_url: string;

  @IsOptional()
  public location: string;

  @IsOptional()
  public link: string;

  @IsOptional()
  public bio: string;

  @IsBoolean()
  public email_verified: boolean;

  @IsBoolean()
  public show_captcha: boolean;

  public accounts: {
    type: LoginProviderEnum;
    accountId: string;
    username: string;
  }[];

  constructor(
    id: string,
    name: string,
    username: string,
    nickname: string,
    email: string,
    plan: string,
    avatar_url: string,
    location: string,
    link: string,
    bio: string,
    email_verified: boolean,
    show_captcha: boolean,
    accounts: {
      type: LoginProviderEnum;
      accountId: string;
      username: string;
    }[],
    permissions?: TokenPermissions,
  ) {
    super(id);
    this.name = name;
    this.nickname = nickname;
    this.username = username;
    this.email = email;
    this.plan = plan;

    if (permissions) {
      this.permissions = permissions;
    } else {
      this.permissions = new TokenPermissions([], [], []);
    }

    this.avatar_url = avatar_url;
    this.location = location;
    this.link = link;
    this.bio = bio;
    this.email_verified = email_verified;
    this.show_captcha = show_captcha;
    this.accounts = accounts;
  }

  public isGlobalAdmin(): boolean {
    if (this.permissions && this.permissions.global && this.permissions.global.findIndex((x) => x === GlobalPermissionsEnum.GLOBAL_ADMIN) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): Token {
    return new Token('', '', '', '', '', '', '', '', '', '', false, false, []);
  }

  static examples(): { [key: string]: { value: Token } } {
    return {
      Token: {
        value: Token.createEmpty(),
      },
    };
  }
}
