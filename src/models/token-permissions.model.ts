import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { KysoPermissions } from '../enums/general-permissions.enum';
import { ResourcePermissions } from './resource-permissions.model';

export class TokenPermissions {
  @ApiModelProperty({
    isArray: true,
  })
  public global?: KysoPermissions[];

  @ApiModelProperty({
    isArray: true,
  })
  public teams?: ResourcePermissions[];

  @ApiModelProperty({
    isArray: true,
  })
  public organizations?: ResourcePermissions[];

  constructor(global: KysoPermissions[], teams: ResourcePermissions[], organizations: ResourcePermissions[]) {
    this.global = global;
    this.teams = teams;
    this.organizations = organizations;
  }
}
