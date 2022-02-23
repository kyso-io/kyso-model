import { IsAlphanumeric, IsEmail, IsNotEmpty, IsObject, IsOptional, IsUrl } from 'class-validator';
import { LoginProviderEnum } from '..';
import { GlobalPermissionsEnum } from '../enums/general-permissions.enum';
import { TokenPermissions } from './token-permissions.model';

export class Token {
  @IsNotEmpty()
  public id: string;

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
    accounts: {
      type: LoginProviderEnum;
      accountId: string;
      username: string;
    }[],
    permissions?: TokenPermissions
  ) {
    this.id = id;
    this.name = name;
    this.nickname = nickname;
    this.username = username;
    this.email = email;
    this.plan = plan;

    if (permissions) {
      this.permissions = permissions;
    } else {
      this.permissions = {};
    }

    this.avatar_url = avatar_url;
    this.location = location;
    this.link = link;
    this.bio = bio;
    this.accounts = accounts;
  }

  public isGlobalAdmin(): boolean {
    if (this.permissions && this.permissions.global && this.permissions.global.findIndex(x => x === GlobalPermissionsEnum.GLOBAL_ADMIN) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}
