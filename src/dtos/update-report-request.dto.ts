
export class UpdateReportRequest {
  location: string;

  link: string;

  bio: string;

  constructor(location: string, link: string, bio: string) {
    this.location = location;
    this.link = link;
    this.bio = bio;
  }
}
