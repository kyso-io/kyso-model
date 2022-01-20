import { IsAlphanumeric, IsEmail, IsNotEmpty, IsObject, IsUrl } from 'class-validator';
import { TokenPermissions } from './token-permissions.model';

export class Token {
  @IsNotEmpty()
  public id: string;

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

  @IsNotEmpty()
  @IsObject()
  public permissions: TokenPermissions;

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
