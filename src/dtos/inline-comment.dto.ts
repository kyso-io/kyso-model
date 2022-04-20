export class InlineCommentDto {
  public id: string;
  public created_at: Date;
  public updated_at: Date;
  public report_id: string;
  public cell_id: string;
  public user_id: string;
  public text: string;
  public edited: boolean;
  public user_name: string;
  public user_avatar: string;

  constructor(id: string, created_at: Date, updated_at: Date, report_id: string, cell_id: string, user_id: string, text: string, edited: boolean, user_name: string, user_avatar: string) {
    this.id = id;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.report_id = report_id;
    this.cell_id = cell_id;
    this.user_id = user_id;
    this.text = text;
    this.edited = edited;
    this.user_name = user_name;
    this.user_avatar = user_avatar;
  }
}
