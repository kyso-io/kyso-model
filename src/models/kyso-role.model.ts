import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { IsEnum, IsNotEmpty } from 'class-validator';
import { KysoPermissions, kysoPermissionsList } from '../enums/general-permissions.enum';

export class KysoRole {
  @ApiModelProperty({
    description: `Role identificator`,
  })
  public id?: string;

  @ApiModelProperty({
    description: `Role name`,
    required: true,
  })
  @IsNotEmpty()
  public name: string;

  @ApiModelProperty({
    description: `List of permissions related to this role. See permission reference for more details`,
    required: true,
  })
  @IsEnum(kysoPermissionsList, { each: true })
  public permissions: KysoPermissions[];

  constructor(name: string, permissions: KysoPermissions[], _id?: string) {
    this.name = name;
    this.permissions = permissions;

    if (_id) {
      this.id = _id;
    }
  }
}
