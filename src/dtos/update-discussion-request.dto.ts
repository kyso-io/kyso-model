import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateDiscussionRequestDTO {
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
