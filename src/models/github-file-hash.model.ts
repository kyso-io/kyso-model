export class GithubFileHash {
  public type: string;
  public path: string;
  public hash: string;
  public htmlUrl: string;
  constructor(type: string, path: string, hash: string, htmlUrl: string) {
    this.type = type;
    this.path = path;
    this.hash = hash;
    this.htmlUrl = htmlUrl;
  }
}
