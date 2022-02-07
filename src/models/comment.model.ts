import { IsBoolean, IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';
import { BaseModel } from './base.model';

export class Comment extends BaseModel {
  @IsNotEmpty()
  public text: string;

  public user_id: string;

  @IsOptional()
  @IsMongoId()
  public report_id: string;

  @IsOptional()
  @IsMongoId()
  public comment_id: string;

  @IsBoolean()
  public marked: boolean;

  @IsOptional()
  @IsMongoId()
  public marked_by?: string;

  @IsBoolean()
  public edited: boolean;

  @IsOptional()
  @IsMongoId()
  public discussion_id?: string;

  constructor(text: string, user_id: string, report_id: string, discussion_id: string, comment_id: string) {
    super();
    this.text = text;
    this.user_id = user_id;
    this.report_id = report_id;
    this.discussion_id = discussion_id;
    this.comment_id = comment_id;
    this.marked = false;
    this.edited = false;
  }
}
