export class BaseFilterQueryDTO {
  public page: number;
  public per_page: number;
  public fields: string | null;
  public sort: string | null;

  constructor(page: number, per_page: number, fields: string | null, sort: string | null) {
    this.page = page;
    this.per_page = per_page;
    this.fields = fields;
    this.sort = sort;
  }
}
