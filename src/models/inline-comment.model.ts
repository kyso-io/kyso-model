import { BaseModel } from './base.model';

export class InlineComment extends BaseModel {
  public report_id: string;
  public cell_id: string;
  public user_id: string;
  public text: string;
  public edited: boolean;

  constructor(report_id: string, cell_id: string, user_id: string, text: string) {
    super();
    this.report_id = report_id;
    this.cell_id = cell_id;
    this.user_id = user_id;
    this.text = text;
    this.edited = false;
  }
}
