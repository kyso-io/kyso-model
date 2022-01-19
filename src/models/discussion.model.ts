import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { IsArray, IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';
import { BaseModel } from './base.model';

export class Discussion extends BaseModel {
  @ApiModelProperty()
  @IsBoolean()
  public answered: boolean;

  @ApiModelProperty()
  @IsString({ each: true })
  @IsArray()
  public assignees: string[];

  @ApiModelProperty()
  @IsString()
  public user_id: string;

  @ApiModelProperty()
  @IsBoolean()
  public closed: boolean;

  @ApiModelProperty()
  @IsString()
  public description: string;

  @ApiModelProperty()
  @IsNumber()
  public discussion_number: number;

  @ApiModelProperty()
  @IsBoolean()
  public edited: boolean;

  @ApiModelProperty()
  @IsString()
  public main: string;

  @ApiModelProperty()
  @IsDate()
  public mark_delete_at: Date | null;

  @ApiModelProperty()
  @IsString()
  public owner_name: string;

  @ApiModelProperty()
  @IsString({ each: true })
  @IsArray()
  public participants: string[];

  @ApiModelProperty()
  @IsBoolean()
  public private: boolean;

  @ApiModelProperty()
  @IsString()
  public team_id: string;

  @ApiModelProperty()
  @IsString()
  public title: string;

  @ApiModelProperty()
  @IsString()
  public url_name: string;

  constructor(
    answered: boolean,
    assignees: string[],
    user_id: string,
    closed: boolean,
    description: string,
    discussion_number: number,
    main: string,
    owner_name: string,
    participants: string[],
    request_private: boolean,
    team_id: string,
    title: string,
    url_name: string
  ) {
    super();
    this.answered = answered;
    this.assignees = assignees;
    this.user_id = user_id;
    this.closed = closed;
    this.description = description;
    this.discussion_number = discussion_number;
    this.main = main;
    this.owner_name = owner_name;
    this.participants = participants;
    this.private = request_private;
    this.team_id = team_id;
    this.title = title;
    this.url_name = url_name;
    this.edited = false;
    this.mark_delete_at = null;
  }
}
