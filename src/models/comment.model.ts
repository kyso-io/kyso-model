import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';
import { BaseModel } from './base.model';

export class Comment extends BaseModel {
  @ApiProperty({ format: 'faker: lorem.sentance' })
  @IsNotEmpty()
  public text: string;

  @ApiProperty({ format: 'faker: datatype.uuid' })
  public user_id: string;

  @ApiProperty({ format: 'faker: lorem.sentance' })
  public username: string;

  @ApiProperty({ format: 'faker: datatype.uuid' })
  @IsMongoId()
  public report_id: string;

  @ApiProperty({ format: 'faker: datatype.uuid' })
  @IsOptional()
  @IsMongoId()
  public comment_id: string;

  @ApiProperty({ format: 'faker: datatype.boolean' })
  @IsBoolean()
  public marked: boolean

  @ApiProperty({ format: 'faker: datatype.uuid' })
  @IsOptional()
  @IsMongoId()
  public marked_by?: string

  @ApiProperty({ format: 'faker: datatype.boolean' })
  @IsBoolean()
  public edited: boolean

  @ApiProperty({ format: 'faker: datatype.uuid' })
  @IsOptional()
  @IsMongoId()
  public discussion_id?: string;

  constructor(text: string, user_id: string, report_id: string, comment_id: string, username: string) {
    super();
    this.text = text;
    this.user_id = user_id;
    this.report_id = report_id;
    this.comment_id = comment_id;
    this.username = username;
    this.marked = false
    this.edited = false
  }
}
