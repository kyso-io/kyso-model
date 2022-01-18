import { ApiProperty } from '@nestjs/swagger';
import { KysoPermissions, kysoPermissionsList } from '../enums/general-permissions.enum';

export class ResourcePermissions {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public id: string;

  @ApiProperty({
    isArray: true,
    description: 'List of roles applied to that resource',
    enum: kysoPermissionsList,
  })
  public permissions?: KysoPermissions[];

  @ApiProperty({
    required: false,
    description: 'Permissions inherited from organization',
  })
  public organization_inherited?: boolean;

  @ApiProperty({
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
