import { KysoPermissions } from '../enums/general-permissions.enum';
import { TeamVisibilityEnum } from '../enums/team-visibility.enum';

export class ResourcePermissions {
  public name: string;

  public display_name: string;

  public id: string;

  public permissions?: KysoPermissions[];

  public organization_inherited?: boolean;

  public organization_id?: string;

  public role_names?: string[]

  public team_visibility?: TeamVisibilityEnum;

  constructor(name: string, display_name: string, permissions: KysoPermissions[], id: string, organization_inherited: boolean, organization_id: string, role_names: string[], team_visibility: TeamVisibilityEnum) {
    this.name = name;
    this.display_name = display_name;
    this.permissions = permissions;
    this.id = id;
    this.organization_inherited = organization_inherited;
    this.organization_id = organization_id;
    this.role_names = role_names
    this.team_visibility = team_visibility;
  }
}
