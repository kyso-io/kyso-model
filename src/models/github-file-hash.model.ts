import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class GithubFileHash extends BaseModel implements StaticImplements<ApiMethods<GithubFileHash>, typeof GithubFileHash> {
  public id: string;
  public type: string;
  public path: string;
  public hash: string;
  public htmlUrl: string;
  public path_scs: string;
  public version: number;
  constructor(id: string, type: string, path: string, hash: string, htmlUrl: string, path_scs: string, version: number) {
    super();
    this.id = id;
    this.type = type;
    this.path = path;
    this.hash = hash;
    this.htmlUrl = htmlUrl;
    this.path_scs = path_scs;
    this.version = version;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): GithubFileHash {
    return new GithubFileHash('', '', '', '', '', '', 1);
  }

  static examples(): { [key: string]: { value: GithubFileHash } } {
    return {
      GithubFileHash: {
        value: GithubFileHash.createEmpty(),
      },
    };
  }
}
