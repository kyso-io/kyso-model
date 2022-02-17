import { IsDate, IsEmail, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { User } from '..';

export class UserDTO {
  @IsString()
  @IsNotEmpty()
  public id: string;

  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public nickname: string;

  @IsString()
  public bio: string;

  @IsString()
  @IsNotEmpty()
  public plan: string;

  @IsString()
  @IsUrl()
  public avatar_url: string;

  @IsString()
  public location: string;

  @IsString()
  public link: string;

  @IsDate()
  public created_at: Date;

  constructor(id: string, email: string, username: string, name: string, nickname: string, bio: string, location: string, link: string, plan: string, avatar_url: string, created_at: Date) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.name = name;
    this.nickname = nickname;
    this.bio = bio;
    this.location = location;
    this.link = link;
    this.plan = plan;
    this.avatar_url = avatar_url;
    this.created_at = created_at;
  }

  public static fromUser(user: User): UserDTO {
    return new UserDTO(user.id ? user.id : 'null', user.email, user.username, user.name, user.nickname, user.bio, user.location, user.link, user.plan, user.avatar_url, user.created_at!);
  }

  public static fromUserArray(user: User[]): UserDTO[] {
    return user.map(x => UserDTO.fromUser(x));
  }
}
