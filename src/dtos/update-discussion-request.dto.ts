import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateDiscussionRequest {
  @ApiModelProperty()
  @IsBoolean()
  public answered: boolean;

  @ApiModelProperty()
  @IsString({ each: true })
  @IsArray()
  public assignees: string[];

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
  @IsString({ each: true })
  @IsArray()
  public participants: string[];

  @ApiModelProperty()
  @IsBoolean()
  public request_private: boolean;

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
    closed: boolean,
    description: string,
    discussion_number: number,
    edited: boolean,
    main: string,
    participants: string[],
    request_private: boolean,
    team_id: string,
    title: string,
    url_name: string
  ) {
    this.answered = answered;
    this.assignees = assignees;
    this.closed = closed;
    this.description = description;
    this.discussion_number = discussion_number;
    this.edited = edited;
    this.main = main;
    this.participants = participants;
    this.request_private = request_private;
    this.team_id = team_id;
    this.title = title;
    this.url_name = url_name;
  }
}
