import { IsBoolean, IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

export class CommentDto {
  @IsNotEmpty()
  public text: string;
  
  @IsNotEmpty()
  public plain_text: string;

  @IsOptional()
  @IsMongoId()
  public report_id: string;

  @IsOptional()
  @IsMongoId()
  public comment_id: string;

  @IsOptional()
  @IsMongoId()
  public discussion_id?: string;
  
  @IsOptional()
  @IsBoolean()
  public marked: boolean;

  @IsOptional()
  @IsMongoId({ each: true })
  public user_ids: string[];

  constructor(text: string, plain_text: string, report_id: string, discussion_id: string, comment_id: string, marked: boolean, user_ids: string[]) {
    this.text = text;
    this.plain_text = plain_text;
    this.report_id = report_id;
    this.discussion_id = discussion_id;
    this.comment_id = comment_id;
    this.marked = marked;
    this.user_ids = user_ids;
  }
}