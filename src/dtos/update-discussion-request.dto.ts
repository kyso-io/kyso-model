import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateDiscussionRequest {
  @ApiProperty()
  @IsBoolean()
  public answered: boolean;

  @ApiProperty()
  @IsString({ each: true })
  @IsArray()
  public assignees: string[];

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
  @IsString({ each: true })
  @IsArray()
  public participants: string[];

  @ApiProperty()
  @IsBoolean()
  public request_private: boolean;

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
