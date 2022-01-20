import { IsString } from 'class-validator';

export class UpdateReportRequestDTO {
  @IsString()
  location: string;

  @IsString()
  link: string;

  @IsString()
  bio: string;

  constructor(location: string, link: string, bio: string) {
    this.location = location;
    this.link = link;
    this.bio = bio;
  }
}
