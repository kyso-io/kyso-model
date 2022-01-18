import { ApiProperty } from '@nestjs/swagger';

export class BaseFilterQuery {
  @ApiProperty({
    minimum: 1,
    title: 'Page',
    description: 'Allows skipping some elements for pagination purposes',
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    format: 'int32',
    default: 1,
    required: false,
  })
  public page: number;

  @ApiProperty({
    minimum: 1,
    maximum: 100,
    title: 'Items per page',
    description: 'Limits the amount of reports returned by the request',
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    format: 'int32',
    default: 30,
    required: false,
  })
  public per_page: number;

  @ApiProperty({
    title: 'Fields',
    description: 'Specify which fields of the reports will be returned',
    format: 'string',
    required: false,
  })
  public fields: string | null;

  @ApiProperty({
    title: 'Sort by',
    description: 'Decide how the returned reports are sorted',
    format: 'string',
    required: false,
  })
  public sort: string | null;

  constructor(page: number, per_page: number, fields: string | null, sort: string | null) {
    this.page = page;
    this.per_page = per_page;
    this.fields = fields;
    this.sort = sort;
  }
}
