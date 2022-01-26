import { RepositoryProvider } from '../enums/repository-provider.enum';
import { BaseModel } from './base.model';

export class Report extends BaseModel {
  public name: string;
  public provider: RepositoryProvider;
  public username_provider: string;
  public default_branch: string;
  public path: string;
  public report_type: string;
  public views: number;
  public pin: boolean;
  public description: string;
  public user_id: string;
  public team_id: string;
  public title: string;
  public authors_ids: string[];

  public buildHatoes(relations?: any) {
    const user = relations.user[this.user_id];

    this.links = {
      self_api: `/${user.nickname}/${this.name}`,
      self_ui: `/${user.nickname}/${this.name}`,
    };
  }

  constructor(
    name: string,
    provider: RepositoryProvider,
    username_provider: string,
    default_branch: string,
    path: string,
    views: number,
    pin: boolean,
    description: string,
    user_id: string,
    team_id: string,
    title: string,
    authors_ids: string[],
  ) {
    super();
    this.name = name;
    this.provider = provider;
    this.username_provider = username_provider;
    this.default_branch = default_branch;
    this.path = path;
    this.report_type = 'report';
    this.views = views;
    this.pin = pin;
    this.description = description;
    this.user_id = user_id;
    this.team_id = team_id;
    this.title = title;
    this.authors_ids = authors_ids;
  }
}
