import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class GithubBranch extends BaseModel implements StaticImplements<ApiMethods<GithubBranch>, typeof GithubBranch> {
  public name: string;
  public commit: string;
  constructor(name: string, commit: string) {
    super();
    this.name = name;
    this.commit = commit;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): GithubBranch {
    return new GithubBranch('', '');
  }

  static examples(): { [key: string]: { value: GithubBranch } } {
    return {
      GithubBranch: {
        value: GithubBranch.createEmpty(),
      },
    };
  }
}
