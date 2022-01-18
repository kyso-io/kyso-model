import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateReportRequest {
  @ApiProperty({
    required: false,
  })
  @IsString()
  location: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  link: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  bio: string;

  constructor(location: string, link: string, bio: string) {
    this.location = location;
    this.link = link;
    this.bio = bio;
  }
}
