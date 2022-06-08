import { StorageDto } from './storage.dto';

export class OrganizationStorageDto extends StorageDto {
  public teams!: StorageDto[];
  constructor() {
    super();
    this.teams = [];
  }
}
