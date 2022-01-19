

export class GithubAccount {
  
  public id: number;

  
  public login: string;

  
  public orgs: any;

  constructor(id: number, login: string, orgs: any) {
    this.id = id;
    this.login = login;
    this.orgs = orgs;
  }
}
