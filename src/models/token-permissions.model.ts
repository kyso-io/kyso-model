import { KysoPermissions } from '../enums/general-permissions.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';
import { ResourcePermissions } from './resource-permissions.model';

export class TokenPermissions extends BaseModel implements StaticImplements<ApiMethods<TokenPermissions>, typeof TokenPermissions> {
  public global?: KysoPermissions[];

  public teams?: ResourcePermissions[];

  public organizations?: ResourcePermissions[];

  constructor(global: KysoPermissions[], teams: ResourcePermissions[], organizations: ResourcePermissions[]) {
    super();
    this.global = global;
    this.teams = teams;
    this.organizations = organizations;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): TokenPermissions {
    return new TokenPermissions([], [], []);
  }

  static examples(): { [key: string]: { value: TokenPermissions } } {
    return {
      TokenPermissions: {
        value: TokenPermissions.createEmpty(),
      },
    };
  }
}
