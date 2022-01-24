export class GithubBranch {
  public name: string;
  public commit: string;
  constructor(name: string, commit: string) {
    this.name = name;
    this.commit = commit;
  }
}
