export class GithubFileHash {
  public type: string;
  public path: string;
  public hash: string;
  public htmlUrl: string;
  public path_scs: string;
  public version: number;
  constructor(type: string, path: string, hash: string, htmlUrl: string, path_scs: string, version: number) {
    this.type = type;
    this.path = path;
    this.hash = hash;
    this.htmlUrl = htmlUrl;
    this.path_scs = path_scs;
    this.version = version;
  }
}
