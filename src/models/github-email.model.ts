import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class GithubEmail extends BaseModel implements StaticImplements<ApiMethods<GithubEmail>, typeof GithubEmail> {
  public email: string;
  public primary: boolean;
  public verified: boolean;
  public visibility: string;

  constructor(email: string, primary: boolean, verified: boolean, visibility: string) {
    super();
    this.email = email;
    this.primary = primary;
    this.verified = verified;
    this.visibility = visibility;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): GithubEmail {
    return new GithubEmail('', false, false, '');
  }

  static examples(): { [key: string]: { value: GithubEmail } } {
    return {
      GithubEmail: {
        value: GithubEmail.createEmpty(),
      },
    };
  }
}
