import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class Error {
  @ApiModelProperty()
  public error: string;

  constructor(error: string) {
    this.error = error;
  }
}
