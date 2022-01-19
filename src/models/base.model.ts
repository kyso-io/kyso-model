import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { IsDate, IsOptional, IsUUID } from 'class-validator';
import { Hateoas } from './hateoas.model';

export class BaseModel {
  @ApiModelProperty()
  public type?: string;

  @IsUUID()
  @IsOptional()
  @ApiModelProperty({ format: 'faker: datatype.uuid' })
  public id?: string;

  @IsDate()
  @IsOptional()
  @ApiModelProperty()
  public created_at?: Date;

  @IsDate()
  @IsOptional()
  @ApiModelProperty()
  public updated_at?: Date;

  @ApiModelProperty({
    default: {},
  })
  public links: Hateoas | {};

  public buildHatoes(relations?: any) {}

  constructor(id?: string, created_at?: Date, updated_at?: Date, links?: Hateoas) {
    this.id = id;
    this.created_at = created_at;
    this.updated_at = updated_at;
    if (links) {
      this.links = links;
    } else {
      this.links = {};
    }
  }
}
