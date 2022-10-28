import { BaseComment } from './base-comment.model';

export class InlineComment extends BaseComment {
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
}
