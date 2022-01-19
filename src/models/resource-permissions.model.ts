import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { KysoPermissions, kysoPermissionsList } from '../enums/general-permissions.enum';

export class ResourcePermissions {
  @ApiModelProperty()
  public name: string;

  @ApiModelProperty()
  public id: string;

  @ApiModelProperty({
    isArray: true,
    description: 'List of roles applied to that resource',
    enum: kysoPermissionsList,
  })
  public permissions?: KysoPermissions[];

  @ApiModelProperty({
    required: false,
    description: 'Permissions inherited from organization',
  })
  public organization_inherited?: boolean;

  @ApiModelProperty({
    required: false,
    description: 'Organization Id which belongs to',
  })
  public organization_id?: string;

  constructor(name: string, permissions: KysoPermissions[], id: string, organization_inherited: boolean, organization_id: string) {
    this.name = name;
    this.permissions = permissions;
    this.id = id;
    this.organization_inherited = organization_inherited;
    this.organization_id = organization_id;
  }
}
