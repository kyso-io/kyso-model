
import { KysoPermissions, kysoPermissionsList } from '../enums/general-permissions.enum';

export class ResourcePermissions {
  public name: string;

  public id: string;

  public permissions?: KysoPermissions[];

  public organization_inherited?: boolean;
  public organization_id?: string;

  constructor(name: string, permissions: KysoPermissions[], id: string, organization_inherited: boolean, organization_id: string) {
    this.name = name;
    this.permissions = permissions;
    this.id = id;
    this.organization_inherited = organization_inherited;
    this.organization_id = organization_id;
  }
}
