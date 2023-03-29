import { InlineCommentStatusHistoryDto } from '../dtos/inline-comment-status-history.dto';
import { InlineCommentStatusEnum } from '../enums/inline-comment-status.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class InlineComment extends BaseModel implements StaticImplements<ApiMethods<InlineComment>, typeof InlineComment> {
  public report_id: string;
  public cell_id: string;
  public user_id: string;
  public text: string;
  public edited: boolean;
  public markedAsDeleted: boolean;
  public mentions: string[];
  public parent_comment_id: string | null;
  public report_version: number | null;
  public current_status: InlineCommentStatusEnum | null;
  public status_history: InlineCommentStatusHistoryDto[];

  // Alias to make it compatible with BaseComment object
  get user_ids(): string[] {
    return this.mentions;
  }

  set user_ids(mentions: string[]) {
    this.mentions = mentions;
  }

  get marked(): boolean {
    return this.markedAsDeleted;
  }

  set marked(markedAsDeleted: boolean) {
    this.markedAsDeleted = markedAsDeleted;
  }

  get author_id(): string {
    return this.user_id;
  }

  set author_id(user_id: string) {
    this.user_id = user_id;
  }

  // The inline comments can't have replys, for that reason this parameter is always null for InlineComments
  get comment_id(): string | undefined {
    return undefined;
  }

  constructor(
    report_id: string,
    cell_id: string,
    user_id: string,
    text: string,
    edited: boolean,
    markedAsDelete: boolean,
    mentions: string[],
    parent_comment_id: string | null,
    report_version: number | null,
    current_status: InlineCommentStatusEnum | null,
  ) {
    super();
    this.report_id = report_id;
    this.cell_id = cell_id;
    this.user_id = user_id;
    this.text = text;
    this.edited = edited;
    this.markedAsDeleted = markedAsDelete;
    this.mentions = mentions;
    this.parent_comment_id = parent_comment_id;
    this.report_version = report_version;
    this.current_status = current_status;
    this.status_history = [];
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): InlineComment {
    return new InlineComment('', '', '', '', false, false, [], null, null, InlineCommentStatusEnum.OPEN);
  }

  static examples(): { [key: string]: { value: InlineComment } } {
    return {
      InlineComment: {
        value: InlineComment.createEmpty(),
      },
    };
  }
}
