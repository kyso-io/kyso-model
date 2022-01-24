export class GithubRepository {
  public id: number;
  public owner: string;
  public name: string;
  public fullName: string;
  public defaultBranch: string;
  public description: string;
  public isPrivate: false;
  public language: null;
  public pushedAt: Date;
  constructor(id: number, owner: string, name: string, fullName: string, defaultBranch: string, description: string, isPrivate: false, language: null, pushedAt: Date) {
    this.id = id;
    this.owner = owner;
    this.name = name;
    this.fullName = fullName;
    this.defaultBranch = defaultBranch;
    this.description = description;
    this.isPrivate = isPrivate;
    this.language = language;
    this.pushedAt = pushedAt;
  }
}
