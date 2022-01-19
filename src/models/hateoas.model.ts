import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class Hateoas {
  @ApiModelProperty()
  public self_api: string;

  @ApiModelProperty()
  public self_ui: string;

  constructor(self_api: string, self_ui: string) {
    this.self_api = self_api;
    this.self_ui = self_ui;
  }
}
