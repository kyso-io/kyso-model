import { KysoPermissions } from '../enums/general-permissions.enum';
import { TeamVisibilityEnum } from '../enums/team-visibility.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class ResourcePermissions extends BaseModel implements StaticImplements<ApiMethods<ResourcePermissions>, typeof ResourcePermissions> {
  public name: string;

  public display_name: string;

  public id: string;

  public permissions?: KysoPermissions[];

  public organization_inherited?: boolean;

  public organization_id?: string;

  public role_names?: string[];

  public team_visibility?: TeamVisibilityEnum;

  constructor(
    name: string,
    display_name: string,
    permissions: KysoPermissions[],
    id: string,
    organization_inherited: boolean,
    organization_id: string,
    role_names: string[],
    team_visibility: TeamVisibilityEnum,
  ) {
    super();
    this.name = name;
    this.display_name = display_name;
    this.permissions = permissions;
    this.id = id;
    this.organization_inherited = organization_inherited;
    this.organization_id = organization_id;
    this.role_names = role_names;
    this.team_visibility = team_visibility;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): ResourcePermissions {
    return new ResourcePermissions('', '', [], '', false, '', [], TeamVisibilityEnum.PRIVATE);
  }

  static examples(): { [key: string]: { value: ResourcePermissions } } {
    return {
      ResourcePermissions: {
        value: ResourcePermissions.createEmpty(),
      },
    };
  }
}
