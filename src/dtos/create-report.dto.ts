import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class CreateReport {
  @ApiModelProperty({
    required: true,
    description: 'Git provider to retrieve the code',
    enum: ['github', 'gitlab', 'bitbucket'],
  })
  public provider: string;

  @ApiModelProperty({
    required: true,
  })
  public owner: string;

  @ApiModelProperty({
    required: true,
  })
  public name: string;

  @ApiModelProperty({
    required: true,
  })
  public default_branch: string;

  @ApiModelProperty({
    required: false,
  })
  public path: string;

  @ApiModelProperty({
    required: true,
  })
  public team_id: string;

  constructor(name: string, owner: string, provider: string, default_branch: string, path: string, team_id: string) {
    this.name = name;
    this.owner = owner;
    this.provider = provider;
    this.default_branch = default_branch;
    this.path = path;
    this.team_id = team_id;
  }
}
