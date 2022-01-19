import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class Repository {
  @ApiModelProperty()
  public owner: string;

  @ApiModelProperty()
  public name: string;

  @ApiModelProperty()
  public full_name: string;

  @ApiModelProperty()
  public default_branch: string;

  @ApiModelProperty()
  public description: string;

  @ApiModelProperty()
  public is_private: boolean;

  @ApiModelProperty()
  public language: string;

  @ApiModelProperty()
  public pushed_at: Date;

  constructor(owner: string, name: string, full_name: string, default_branch: string, description: string, is_private: boolean, language: string, pushed_at: Date) {
    this.owner = owner;
    this.name = name;
    this.full_name = full_name;
    this.default_branch = default_branch;
    this.description = description;
    this.is_private = is_private;
    this.language = language;
    this.pushed_at = pushed_at;
  }
}
