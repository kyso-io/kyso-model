import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { BaseFilterQuery } from './base-filter.dto';

export class ReportFilterQuery extends BaseFilterQuery {
  @ApiModelProperty({
    title: 'Filter by owner',
    description: 'Return only reports belonging to the specified owner. Can be a user or a team',
    format: 'string',
    required: false,
  })
  owner: string;

  @ApiModelProperty({
    title: 'Filter by pinned',
    description: 'Return only reports that are pinned',
    format: 'boolean',
    required: false,
  })
  pinned: boolean;

  @ApiModelProperty({
    title: 'Filter by comma separated tags',
    description: 'Return only reports that has at least one the tags provided',
    format: 'string',
    required: false,
  })
  tags: string;

  constructor(page: number, per_page: number, fields: string | null, sort: string | null, owner: string, pinned: boolean, tags: string) {
    super(page, per_page, fields, sort);
    this.owner = owner;
    this.pinned = pinned;
    this.tags = tags;
  }
}
