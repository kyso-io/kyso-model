import { IsBoolean, IsMongoId, IsNotEmpty, IsOptional } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseComment } from './base-comment.model';

export class Comment extends BaseComment implements StaticImplements<ApiMethods<Comment>, typeof Comment> {
  @IsNotEmpty()
  public text: string;

  @IsNotEmpty()
  public plain_text: string;

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

  public mark_delete_at: Date | null;

  @IsMongoId({ each: true })
  public user_ids: string[];

  // Alias to make it compatible with BaseComment object
  get author_id(): string {
    return this.user_id;
  }

  set author_id(user_id: string) {
    this.user_id = user_id;
  }

  get mentions(): string[] {
    return this.user_ids;
  }

  set mentions(user_ids: string[]) {
    this.user_ids = user_ids;
  }

  constructor(text: string, plain_text: string, user_id: string, report_id: string, discussion_id: string, comment_id: string, user_ids: string[], id?: string) {
    super(id);
    this.text = text;
    this.plain_text = plain_text;
    this.user_id = user_id;
    this.report_id = report_id;
    this.discussion_id = discussion_id;
    this.comment_id = comment_id;
    this.marked = false;
    this.edited = false;
    this.mark_delete_at = null;
    this.user_ids = user_ids;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): Comment {
    return new Comment('', '', '', '', '', '', []);
  }

  static examples(): { [key: string]: { value: Comment } } {
    return {
      Comment: {
        value: Comment.createEmpty(),
      },
    };
  }
}
