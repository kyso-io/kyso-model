import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';
import { StorageDto } from './storage.dto';

export class OrganizationStorageDto extends BaseModel implements StaticImplements<ApiMethods<OrganizationStorageDto>, typeof OrganizationStorageDto> {
  public teams!: StorageDto[];
  constructor() {
    super();
    this.teams = [];
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): OrganizationStorageDto {
    return new OrganizationStorageDto();
  }

  static examples(): { [key: string]: { value: OrganizationStorageDto } } {
    return {
      OrganizationStorageDto: {
        value: OrganizationStorageDto.createEmpty(),
      },
    };
  }
}
