import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

/**
 * TODO: Decide if we need this
 */
export class BaseRole {
  @ApiModelProperty()
  public id: string;

  @ApiModelProperty()
  public type: string;

  constructor(id: string, type: string) {
    this.id = id;
    this.type = type;
  }
}
