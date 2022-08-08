import { BaseModel } from './base.model';

export class InlineComment extends BaseModel {
  public report_id: string;
  public cell_id: string;
  public user_id: string;
  public text: string;
  public edited: boolean;
  public markedAsDeleted: boolean;
  public mentions: string[];

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
