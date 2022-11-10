import { IsNotEmpty } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class TagRequestDTO extends BaseDto implements StaticImplements<ApiMethods<TagRequestDTO>, typeof TagRequestDTO> {
  @IsNotEmpty()
  public name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): TagRequestDTO {
    return new TagRequestDTO('');
  }

  static examples(): { [key: string]: { value: TagRequestDTO } } {
    return {
      TagRequestDTO: {
        value: TagRequestDTO.createEmpty(),
      },
    };
  }
}
