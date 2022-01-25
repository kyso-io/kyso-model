export class GithubEmail {
  public email: string;
  public primary: boolean;
  public verified: boolean;
  public visibility: string;

  constructor(email: string, primary: boolean, verified: boolean, visibility: string) {
    this.email = email;
    this.primary = primary;
    this.verified = verified;
    this.visibility = visibility;
  }
}
