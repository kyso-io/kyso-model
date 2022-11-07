import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';
import { StorageDto } from './storage.dto';

export class OrganizationStorageDto extends StorageDto implements StaticImplements<ApiMethods<OrganizationStorageDto>, typeof OrganizationStorageDto> {
  public teams!: StorageDto[];
  constructor(name: string, consumedSpaceKb: number, consumedSpaceMb: number, consumedSpaceGb: number) {
    super(name, consumedSpaceKb, consumedSpaceMb, consumedSpaceGb);
    this.teams = [];
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): OrganizationStorageDto {
    return new OrganizationStorageDto('', 0, 0, 0);
  }

  static examples(): { [key: string]: { value: OrganizationStorageDto } } {
    return {
      OrganizationStorageDto: {
        value: OrganizationStorageDto.createEmpty(),
      },
    };
  }
}
