import { BaseModel } from '../models/base.model';
import { Hateoas } from '../models/hateoas.model';

export class ReportDTO extends BaseModel {
  public name: string;
  public report_type: string;
  public views: number;
  public provider: any;
  public pin: boolean;
  public user_pin: boolean;
  public stars: number;
  public mark_as_star_by_user: boolean;
  public number_of_comments: number;
  public tag_ids: string[];
  public description: string;
  public user_id: string;
  public comment_ids: string[];
  public team_id: string;
  public title: string;
  public author_ids: string[];

  constructor(
    id: string,
    created_at: Date,
    updated_at: Date,
    links: Hateoas,
    name: string,
    report_type: string,
    views: number,
    provider: any,
    pin: boolean,
    user_pin: boolean,
    stars: number,
    mark_as_star_by_user: boolean,
    number_of_comments: number,
    tag_ids: string[],
    description: string,
    user_id: string,
    comment_ids: string[],
    team_id: string,
    title: string,
    author_ids: string[]
  ) {
    super(id, created_at, updated_at, links);
    this.name = name;
    this.report_type = report_type;
    this.views = views;
    this.provider = provider;
    this.pin = pin;
    this.user_pin = user_pin;
    this.stars = stars;
    this.mark_as_star_by_user = mark_as_star_by_user;
    this.number_of_comments = number_of_comments;
    this.tag_ids = tag_ids;
    this.description = description;
    this.user_id = user_id;
    this.comment_ids = comment_ids;
    this.team_id = team_id;
    this.title = title;
    this.author_ids = author_ids;
  }
}
