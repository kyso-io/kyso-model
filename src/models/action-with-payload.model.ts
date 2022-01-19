import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ActionWithPayload<T> {
  @ApiModelProperty()
  public payload: T | null;

  constructor(payload: T) {
    this.payload = payload;
  }
}
