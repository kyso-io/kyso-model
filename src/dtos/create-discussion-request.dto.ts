import { IsArray, IsBoolean, IsNumber, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class CreateDiscussionRequestDTO extends BaseDto implements StaticImplements<ApiMethods<CreateDiscussionRequestDTO>, typeof CreateDiscussionRequestDTO> {
  @IsBoolean()
  public answered: boolean;

  @IsString({ each: true })
  @IsArray()
  public assignees: string[];

  @IsString()
  public user_id: string;

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
    user_id: string,
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
    this.user_id = user_id;
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

  validate(): boolean {
    return true;
  }

  static createEmpty(): CreateDiscussionRequestDTO {
    return new CreateDiscussionRequestDTO(false, [], '', false, '', 0, false, '', [], false, '', '', '');
  }

  static examples(): { [key: string]: { value: CreateDiscussionRequestDTO } } {
    return {
      CreateDiscussionRequestDTO: {
        value: CreateDiscussionRequestDTO.createEmpty(),
      },
    };
  }
}
