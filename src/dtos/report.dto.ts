import { RepositoryProvider } from '..';
import { ReportStatus } from '../enums/report-status.enum';
import { BaseModel } from '../models/base.model';
import { Comment } from '../models/comment.model';
import { Hateoas } from '../models/hateoas.model';

export class ReportDTO extends BaseModel {
  public name: string;
  public report_type: string;
  public views: number;
  public provider: RepositoryProvider;
  public name_provider: string;
  public pin: boolean;
  public user_pin: boolean;
  public stars: number;
  public mark_as_star_by_user: boolean;
  public number_of_comments: number;
  public tags: string[];
  public description: string;
  public user_id: string;
  public comments: Comment[];
  public team_id: string;
  public title: string;
  public author_ids: string[];
  public status: ReportStatus;
  public preview_picture: string;
  public show_code: boolean;
  public show_output: boolean;
  public main_file: string;

  constructor(
    id: string,
    created_at: Date,
    updated_at: Date,
    links: Hateoas,
    name: string,
    report_type: string,
    views: number,
    provider: any,
    name_provider: string,
    pin: boolean,
    user_pin: boolean,
    stars: number,
    mark_as_star_by_user: boolean,
    number_of_comments: number,
    tags: string[],
    description: string,
    user_id: string,
    comments: Comment[],
    team_id: string,
    title: string,
    author_ids: string[],
    status: ReportStatus,
    preview_picture: string,
    show_code: boolean,
    show_output: boolean,
    main_file: string,
  ) {
    super(id, created_at, updated_at, links);
    this.name = name;
    this.report_type = report_type;
    this.views = views;
    this.provider = provider;
    this.name_provider = name_provider;
    this.pin = pin;
    this.user_pin = user_pin;
    this.stars = stars;
    this.mark_as_star_by_user = mark_as_star_by_user;
    this.number_of_comments = number_of_comments;
    this.tags = tags;
    this.description = description;
    this.user_id = user_id;
    this.comments = comments;
    this.team_id = team_id;
    this.title = title;
    this.author_ids = author_ids;
    this.status = status;
    this.preview_picture = preview_picture;
    this.show_code = show_code;
    this.show_output = show_output;
    this.main_file = main_file;
  }

  public buildHatoes(relations?: any) {
    const user = relations.user[this.user_id];

    this.links = {
      self_api: `/${user.nickname}/${this.name}`,
      self_ui: `/${user.nickname}/${this.name}`,
    };
  }
}
