import { ReportStatus } from '../enums/report-status.enum';
import { RepositoryProvider } from '../enums/repository-provider.enum';
import { BaseModel } from './base.model';

export class Report extends BaseModel {
  public sluglified_name: string;
  public provider_id: string | null;
  public hook_id: string | null;
  public provider: RepositoryProvider;
  public name_provider: string;
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
  public author_ids: string[];
  public status: ReportStatus;
  public preview_picture: string;
  public show_code: boolean;
  public show_output: boolean;

  constructor(
    sluglified_name: string,
    provider_id: string | null,
    hook_id: string | null,
    provider: RepositoryProvider,
    name_provider: string,
    username_provider: string,
    default_branch: string,
    path: string,
    views: number,
    pin: boolean,
    description: string,
    user_id: string,
    team_id: string,
    title: string,
    author_ids: string[],
    preview_picture: string,
    show_code: boolean,
    show_output: boolean,
  ) {
    super();
    this.sluglified_name = sluglified_name;
    this.provider_id = provider_id;
    this.hook_id = hook_id;
    this.provider = provider;
    this.name_provider = name_provider;
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
    this.author_ids = author_ids;
    this.status = ReportStatus.Processing;
    this.preview_picture = preview_picture;
    this.show_code = show_code;
    this.show_output = show_output;
  }
}
