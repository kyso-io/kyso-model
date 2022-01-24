import { BaseModel } from './base.model';

export class Report extends BaseModel {
  public name: string;

  public type: string;

  public views: number;

  // We can keep some fields without typing if we want as well

  public analytics: any;

  public provider: any;

  public source: any;

  public pin: boolean;

  public tags: string[];

  public description: string;

  public request_private: boolean;

  public user_id: string;

  public comment_ids: string[];

  public team_id: string;

  public buildHatoes(relations?: any) {
    const user = relations.user[this.user_id];

    this.links = {
      self_api: `/${user.nickname}/${this.name}`,
      self_ui: `/${user.nickname}/${this.name}`,
    };
  }

  constructor(
    name: string,
    views: number,
    analytics: any,
    provider: any,
    source: any,
    pin: boolean,
    tags: string[],
    description: string,
    request_private: boolean,
    user_id: string,
    comment_ids: [string],
    team_id: string
  ) {
    super();
    this.name = name;
    this.type = 'report';
    this.views = views;
    this.analytics = analytics;
    this.provider = provider;
    this.source = source;
    this.pin = pin;
    this.tags = tags;
    this.description = description;
    this.request_private = request_private;
    this.user_id = user_id;
    this.comment_ids = comment_ids;
    this.team_id = team_id;
  }
}
