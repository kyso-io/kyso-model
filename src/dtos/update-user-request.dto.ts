
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserRequest {
  @IsOptional()
  @IsNotEmpty()
  public nickname: string;

  @IsOptional()
  @IsString()
  public bio: string;

  @IsOptional()
  @IsString()
  public accessToken: string;

  constructor(nickname: string, bio: string, accessToken: string) {
    this.nickname = nickname;
    this.bio = bio;
    this.accessToken = accessToken;
  }
}
