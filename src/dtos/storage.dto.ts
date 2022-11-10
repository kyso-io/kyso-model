import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class StorageDto extends BaseDto implements StaticImplements<ApiMethods<StorageDto>, typeof StorageDto> {
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
