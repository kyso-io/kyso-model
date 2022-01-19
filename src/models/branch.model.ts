import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class Branch {
  @ApiModelProperty()
  public name: string;

  @ApiModelProperty()
  public commit: string;

  @ApiModelProperty()
  public is_default: boolean;

  constructor(name: string, commit: string, is_default: boolean) {
    this.name = name;
    this.commit = commit;
    this.is_default = is_default;
  }
}
