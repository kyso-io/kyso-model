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
  public report_version: number;
  public current_status: InlineCommentStatusEnum;
  public status_history: InlineCommentStatusHistoryDto[]; // date, from_status, to_status, user_id, report_version

  constructor(
    id: string,
    created_at: Date,
    updated_at: Date,
    report_id: string,
    cell_id: string,
    user_id: string,
    text: string,
    edited: boolean,
    markedAsDeleted: boolean,
    user_name: string,
    user_avatar: string,
    mentions: string[],
    parent_comment_id: string | null = null,
    report_version: number,
    current_status: InlineCommentStatusEnum,
  ) {
    super();
    this.id = id;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.report_id = report_id;
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
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): InlineCommentDto {
    return new InlineCommentDto('', new Date(), new Date(), '', '', '', '', false, false, '', '', [], null, 0, InlineCommentStatusEnum.OPEN);
  }

  static examples(): { [key: string]: { value: InlineCommentDto } } {
    return {
      InlineCommentDto: {
        value: InlineCommentDto.createEmpty(),
      },
    };
  }
}
