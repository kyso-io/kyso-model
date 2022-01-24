import { BaseModel } from '../models/base.model';
import { Hateoas } from '../models/hateoas.model';

export class ReportDTO extends BaseModel {
  public name: string;
  public report_type: string;
  public views: number;
  public analytics: any;
  public provider: any;
  public source: any;
  public pin: boolean;
  public user_pin: boolean;
  public stars: number;
  public mark_as_star_by_user: boolean;
  public number_of_comments: number;
  public tags: string[];
  public description: string;
  public request_private: boolean;
  public user_id: string;
  public comment_ids: string[];
  public team_id: string;
  public mynewproperty: string;

  constructor(
    id: string,
    created_at: Date,
    updated_at: Date,
    links: Hateoas,
    name: string,
    report_type: string,
    views: number,
    analytics: any,
    provider: any,
    source: any,
    pin: boolean,
    user_pin: boolean,
    stars: number,
    mark_as_star_by_user: boolean,
    number_of_comments: number,
    tags: string[],
    description: string,
    request_private: boolean,
    user_id: string,
    comment_ids: string[],
    team_id: string
  ) {
    super(id, created_at, updated_at, links);
    this.name = name;
    this.report_type = report_type;
    this.views = views;
    this.analytics = analytics;
    this.provider = provider;
    this.source = source;
    this.pin = pin;
    this.user_pin = user_pin;
    this.stars = stars;
    this.mark_as_star_by_user = mark_as_star_by_user;
    this.number_of_comments = number_of_comments;
    this.tags = tags;
    this.description = description;
    this.request_private = request_private;
    this.user_id = user_id;
    this.comment_ids = comment_ids;
    this.team_id = team_id;
    this.mynewproperty = "";
  }
}
