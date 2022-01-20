
import { KysoPermissions } from '../enums/general-permissions.enum';
import { ResourcePermissions } from './resource-permissions.model';

export class TokenPermissions {
  public global?: KysoPermissions[];

  public teams?: ResourcePermissions[];

  public organizations?: ResourcePermissions[];

  constructor(global: KysoPermissions[], teams: ResourcePermissions[], organizations: ResourcePermissions[]) {
    this.global = global;
    this.teams = teams;
    this.organizations = organizations;
  }
}
