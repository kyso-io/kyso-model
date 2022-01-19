import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsDate, IsInt, IsNumber, IsString } from 'class-validator';
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
  public author_id: string;

  @ApiProperty()
  @IsBoolean()
  public closed: boolean;

  @ApiProperty()
  @IsString()
  public content: string;

  @ApiProperty()
  @IsString()
  public comment_id: string;

  @ApiProperty()
  @IsDate()
  public created_at: Date;

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
  public mark_delete_at: Date;

  @ApiProperty()
  @IsInt()
  public number_of_comments: number;

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

  @ApiProperty()
  @IsDate()
  public updated_at: Date;

  constructor(
    answered: boolean,
    assignees: string[],
    author_id: string,
    closed: boolean,
    content: string,
    comment_id: string,
    created_at: Date,
    description: string,
    discussion_number: number,
    edited: boolean,
    main: string,
    mark_delete_at: Date,
    number_of_comments: number,
    owner_name: string,
    participants: string[],
    request_private: boolean,
    team_id: string,
    title: string,
    url_name: string,
    updated_at: Date
  ) {
    super();
    this.answered = answered;
    this.assignees = assignees;
    this.author_id = author_id;
    this.closed = closed;
    this.content = content;
    this.comment_id = comment_id;
    this.created_at = created_at;
    this.description = description;
    this.discussion_number = discussion_number;
    this.edited = edited;
    this.main = main;
    this.mark_delete_at = mark_delete_at;
    this.number_of_comments = number_of_comments;
    this.owner_name = owner_name;
    this.participants = participants;
    this.private = request_private;
    this.team_id = team_id;
    this.title = title;
    this.url_name = url_name;
    this.updated_at = updated_at;
  }
}
