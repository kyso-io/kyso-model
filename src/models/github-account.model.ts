import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class GithubAccount {
  @ApiModelProperty()
  public id: number;

  @ApiModelProperty()
  public login: string;

  @ApiModelProperty()
  public orgs: any;

  constructor(id: number, login: string, orgs: any) {
    this.id = id;
    this.login = login;
    this.orgs = orgs;
  }
}
