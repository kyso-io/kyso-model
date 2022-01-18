import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateTeamRequest {
  @ApiProperty()
  @IsString()
  public location: string;

  @ApiProperty()
  @IsString()
  public link: string;

  @ApiProperty()
  @IsString()
  public bio: string;

  constructor(location: string, link: string, bio: string) {
    this.location = location;
    this.link = link;
    this.bio = bio;
  }
}
