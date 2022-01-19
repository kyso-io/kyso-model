import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ApiError {
  @ApiModelProperty()
  public statusCode: number;

  @ApiModelProperty()
  public message: string;

  @ApiModelProperty()
  public error: string;

  constructor(statusCode: number, message: string, error: string) {
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
  }
}
