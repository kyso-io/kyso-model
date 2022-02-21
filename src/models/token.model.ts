import { IsAlphanumeric, IsEmail, IsNotEmpty, IsObject, IsOptional, IsUrl } from 'class-validator';
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

  @IsUrl()
  @IsNotEmpty()
  public avatar_url: string;

  @IsOptional()
  public location: string;

  @IsOptional()
  public link: string;

  @IsOptional()
  public bio: string;

  constructor(id: string, name: string, username: string, nickname: string, email: string, plan: string, permissions: TokenPermissions, avatar_url: string, location: string, link: string, bio: string) {
    this.id = id;
    this.name = name;
    this.nickname = nickname;
    this.username = username;
    this.email = email;
    this.plan = plan;
    this.permissions = permissions;
    this.avatar_url = avatar_url;
    this.location = location;
    this.link = link;
    this.bio = bio;
  }
}
