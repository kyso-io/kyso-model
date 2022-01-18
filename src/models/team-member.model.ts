import { ApiProperty } from '@nestjs/swagger';

export class TeamMember {
  @ApiProperty()
  public id: string;

  @ApiProperty()
  public nickname: string;

  @ApiProperty()
  public username: string;

  @ApiProperty()
  public team_roles: string[];

  @ApiProperty()
  public bio: string;

  @ApiProperty()
  public avatar_url: string;

  @ApiProperty()
  public email: string;

  constructor(id: string, nickname: string, username: string, team_roles: string[], bio: string, avatar_url: string, email: string) {
    this.id = id;
    this.nickname = nickname;
    this.username = username;
    this.team_roles = team_roles;
    this.bio = bio;
    this.avatar_url = avatar_url;
    this.email = email;
  }
}
