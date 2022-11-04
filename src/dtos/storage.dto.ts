import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class StorageDto extends BaseModel implements StaticImplements<ApiMethods<StorageDto>, typeof StorageDto> {
  public name: string;
  public consumedSpaceKb: number;
  public consumedSpaceMb: number;
  public consumedSpaceGb: number;

  constructor(name: string, consumedSpaceKb: number, consumedSpaceMb: number, consumedSpaceGb: number) {
    super();
    this.name = name;
    this.consumedSpaceKb = consumedSpaceKb;
    this.consumedSpaceMb = consumedSpaceMb;
    this.consumedSpaceGb = consumedSpaceGb;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): StorageDto {
    return new StorageDto('', 0, 0, 0);
  }

  static examples(): { [key: string]: { value: StorageDto } } {
    return {
      StorageDto: {
        value: StorageDto.createEmpty(),
      },
    };
  }
}
