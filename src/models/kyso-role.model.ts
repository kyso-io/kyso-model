

import { IsEnum, IsNotEmpty } from 'class-validator';
import { KysoPermissions, kysoPermissionsList } from '../enums/general-permissions.enum';

export class KysoRole {
  public id?: string;

  @IsNotEmpty()
  public name: string;

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
