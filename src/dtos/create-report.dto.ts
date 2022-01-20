export class CreateReport {
  public provider: string;

  public owner: string;

  public name: string;

  public default_branch: string;

  public path: string;

  public team_id: string;

  constructor(name: string, owner: string, provider: string, default_branch: string, path: string, team_id: string) {
    this.name = name;
    this.owner = owner;
    this.provider = provider;
    this.default_branch = default_branch;
    this.path = path;
    this.team_id = team_id;
  }
}
