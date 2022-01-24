import { RepositoryProvider } from '../enums/repository-provider.enum';

export class CreateReportDTO {
  public name: string;
  public provider: RepositoryProvider;
  public username_provider: string;
  public default_branch: string;
  public path: string;
  public team_id: string;

  constructor(name: string, username_provider: string, provider: RepositoryProvider, default_branch: string, path: string, team_id: string) {
    this.name = name;
    this.username_provider = username_provider;
    this.provider = provider;
    this.default_branch = default_branch;
    this.path = path;
    this.team_id = team_id;
  }
}
