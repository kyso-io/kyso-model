import { ApiProperty } from '@nestjs/swagger';

export class GithubAccount {
  @ApiProperty()
  public id: number;

  @ApiProperty()
  public login: string;

  @ApiProperty()
  public orgs: any;

  constructor(id: number, login: string, orgs: any) {
    this.id = id;
    this.login = login;
    this.orgs = orgs;
  }
}
