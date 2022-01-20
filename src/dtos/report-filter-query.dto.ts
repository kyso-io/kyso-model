import { BaseFilterQuery } from './base-filter.dto';

export class ReportFilterQuery extends BaseFilterQuery {
  owner: string;

  pinned: boolean;

  tags: string;

  constructor(page: number, per_page: number, fields: string | null, sort: string | null, owner: string, pinned: boolean, tags: string) {
    super(page, per_page, fields, sort);
    this.owner = owner;
    this.pinned = pinned;
    this.tags = tags;
  }
}
