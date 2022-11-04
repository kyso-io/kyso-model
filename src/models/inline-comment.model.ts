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

  constructor(report_id: string, cell_id: string, user_id: string, text: string, edited: boolean, markedAsDelete: boolean, mentions: string[]) {
    super();
    this.report_id = report_id;
    this.cell_id = cell_id;
    this.user_id = user_id;
    this.text = text;
    this.edited = edited;
    this.markedAsDeleted = markedAsDelete;
    this.mentions = mentions;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): InlineComment {
    return new InlineComment('', '', '', '', false, false, []);
  }

  static examples(): { [key: string]: { value: InlineComment } } {
    return {
      InlineComment: {
        value: InlineComment.createEmpty(),
      },
    };
  }
}
