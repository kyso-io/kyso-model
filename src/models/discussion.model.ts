import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';
import { BaseModel } from '..';

export class Discussion extends BaseModel {
  @ApiProperty()
  @IsBoolean()
  public answered: boolean;

  @ApiProperty()
  @IsString({ each: true })
  @IsArray()
  public assignees: string[];

  @ApiProperty()
  @IsString()
  public user_id: string;

  @ApiProperty()
  @IsBoolean()
  public closed: boolean;

  @ApiProperty()
  @IsString()
  public description: string;

  @ApiProperty()
  @IsNumber()
  public discussion_number: number;

  @ApiProperty()
  @IsBoolean()
  public edited: boolean;

  @ApiProperty()
  @IsString()
  public main: string;

  @ApiProperty()
  @IsDate()
  public mark_delete_at: Date | null;

  @ApiProperty()
  @IsString()
  public owner_name: string;

  @ApiProperty()
  @IsString({ each: true })
  @IsArray()
  public participants: string[];

  @ApiProperty()
  @IsBoolean()
  public private: boolean;

  @ApiProperty()
  @IsString()
  public team_id: string;

  @ApiProperty()
  @IsString()
  public title: string;

  @ApiProperty()
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
