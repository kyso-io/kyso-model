import { IsArray, IsBoolean, IsNumber, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { Discussion } from '../models/discussion.model';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class UpdateDiscussionRequestDTO extends BaseDto implements StaticImplements<ApiMethods<UpdateDiscussionRequestDTO>, typeof UpdateDiscussionRequestDTO> {
  @IsBoolean()
  public answered: boolean;

  @IsString({ each: true })
  @IsArray()
  public assignees: string[];

  @IsBoolean()
  public closed: boolean;

  @IsString()
  public description: string;

  @IsNumber()
  public discussion_number: number;

  @IsBoolean()
  public edited: boolean;

  @IsString()
  public main: string;

  @IsString({ each: true })
  @IsArray()
  public participants: string[];

  @IsBoolean()
  public request_private: boolean;

  @IsString()
  public team_id: string;

  @IsString()
  public title: string;

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
    url_name: string,
  ) {
    super();
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

  static fromDiscussion(discussion: Discussion): UpdateDiscussionRequestDTO {
    return new UpdateDiscussionRequestDTO(
      discussion.answered,
      discussion.assignees,
      discussion.closed,
      discussion.description,
      discussion.discussion_number,
      discussion.edited,
      discussion.main,
      discussion.participants,
      discussion.private,
      discussion.team_id,
      discussion.title,
      discussion.url_name,
    );
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateDiscussionRequestDTO {
    return new UpdateDiscussionRequestDTO(false, [], false, '', 0, false, '', [], false, '', '', '');
  }

  static examples(): { [key: string]: { value: UpdateDiscussionRequestDTO } } {
    return {
      UpdateDiscussionRequestDTO: {
        value: UpdateDiscussionRequestDTO.createEmpty(),
      },
    };
  }
}
