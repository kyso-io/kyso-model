
import { IsString } from 'class-validator';

export class UpdateReportRequest {
  
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
