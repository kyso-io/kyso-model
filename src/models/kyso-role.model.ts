import { IsEnum, IsNotEmpty } from 'class-validator';
import { KysoPermissions, kysoPermissionsList } from '../enums/general-permissions.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class KysoRole extends BaseModel implements StaticImplements<ApiMethods<KysoRole>, typeof KysoRole> {
  @IsNotEmpty()
  public name: string;

  @IsEnum(kysoPermissionsList, { each: true })
  public permissions: KysoPermissions[];

  constructor(name: string, permissions: KysoPermissions[], _id?: string) {
    super();
    this.name = name;
    this.permissions = permissions;

    if (_id) {
      this.id = _id;
    }
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): KysoRole {
    return new KysoRole('', []);
  }

  static examples(): { [key: string]: { value: KysoRole } } {
    return {
      KysoRole: {
        value: KysoRole.createEmpty(),
      },
    };
  }
}
