import { IsMongoId, IsOptional } from '@nestjs/class-validator';
import { InlineCommentStatusEnum } from '../enums/inline-comment-status.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';
import { InlineCommentStatusHistoryDto } from './inline-comment-status-history.dto';

export class InlineCommentDto extends BaseDto implements StaticImplements<ApiMethods<InlineCommentDto>, typeof InlineCommentDto> {
  public id: string;
  public created_at: Date;
  public updated_at: Date;
  public report_id: string;
  public file_id: string;
  public cell_id: string;
  public user_id: string;
  public text: string;
  public edited: boolean;
  public markedAsDeleted: boolean;
  public user_name: string;
  public user_avatar: string;

  @IsOptional()
  @IsMongoId({ each: true })
  public mentions: string[];

  public parent_comment_id: string | null;
  public report_version: number | null;
  public current_status: InlineCommentStatusEnum | null;
  public status_history: InlineCommentStatusHistoryDto[];
  public inline_comments: InlineCommentDto[];

  constructor(
    id: string,
    created_at: Date,
    updated_at: Date,
    report_id: string,
    file_id: string,
    cell_id: string,
    user_id: string,
    text: string,
    edited: boolean,
    markedAsDeleted: boolean,
    user_name: string,
    user_avatar: string,
    mentions: string[],
    parent_comment_id: string | null,
    report_version: number | null,
    current_status: InlineCommentStatusEnum | null,
  ) {
    super();
    this.id = id;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.report_id = report_id;
    this.file_id = file_id;
    this.cell_id = cell_id;
    this.user_id = user_id;
    this.text = text;
    this.edited = edited;
    this.markedAsDeleted = markedAsDeleted;
    this.user_name = user_name;
    this.user_avatar = user_avatar;
    this.mentions = mentions;
    this.parent_comment_id = parent_comment_id;
    this.report_version = report_version;
    this.current_status = current_status;
    this.status_history = [];
    this.inline_comments = [];
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): InlineCommentDto {
    return new InlineCommentDto('', new Date(), new Date(), '', '', '', '', '', false, false, '', '', [], null, null, InlineCommentStatusEnum.OPEN);
  }

  static examples(): { [key: string]: { value: InlineCommentDto } } {
    return {
      InlineCommentDto: {
        value: InlineCommentDto.createEmpty(),
      },
    };
  }
}
