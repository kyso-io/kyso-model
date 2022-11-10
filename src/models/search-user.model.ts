import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class SearchUser extends BaseModel implements StaticImplements<ApiMethods<SearchUser>, typeof SearchUser> {
  public organization_id: string | null;
  public team_id: string | null;
  public user_id: string | null;
  public query: string | null;
  public payload: any | null;
  constructor() {
    super();
    this.organization_id = null;
    this.team_id = null;
    this.user_id = null;
    this.query = null;
    this.payload = null;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): SearchUser {
    return new SearchUser();
  }

  static examples(): { [key: string]: { value: SearchUser } } {
    return {
      SearchUser: {
        value: SearchUser.createEmpty(),
      },
    };
  }
}
