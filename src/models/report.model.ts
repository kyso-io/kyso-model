//import { ApiExtraModels } from '@nestjs/swagger';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
// import { BatchReportCreation } from '../dtos/batch-report-creation-response.dto';
import { BaseModel } from './base.model';

// @ApiExtraModels(BatchReportCreation)
export class Report extends BaseModel {
  @ApiModelProperty()
  public name: string;

  @ApiModelProperty()
  public type: 'report';

  @ApiModelProperty()
  public views: number;

  @ApiModelProperty()
  public stars: number;

  @ApiModelProperty()
  public number_of_comments: number;

  // We can keep some fields without typing if we want as well
  @ApiModelProperty()
  public analytics: any;

  @ApiModelProperty()
  public provider: any;

  @ApiModelProperty()
  public source: any;

  @ApiModelProperty()
  public pin: boolean;

  @ApiModelProperty()
  public tags: string[];

  @ApiModelProperty()
  public description: string;

  @ApiModelProperty()
  public request_private: boolean;

  @ApiModelProperty({ format: 'faker: datatype.uuid' })
  public user_id: string;

  @ApiModelProperty({ format: 'faker: datatype.uuid' })
  public comment_ids: [string];

  @ApiModelProperty({ format: 'faker: datatype.uuid' })
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
    stars: number,
    number_of_comments: number,
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
    this.stars = stars;
    this.number_of_comments = number_of_comments;
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
