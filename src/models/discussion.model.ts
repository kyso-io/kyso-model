import { IsArray, IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';
import { BaseModel } from './base.model';

export class Discussion extends BaseModel {
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

  @IsDate()
  public mark_delete_at: Date | null;

  @IsString()
  public owner_name: string;

  @IsString({ each: true })
  @IsArray()
  public participants: string[];

  @IsBoolean()
  public private: boolean;

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
