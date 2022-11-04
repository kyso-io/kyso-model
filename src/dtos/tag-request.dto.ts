import { IsNotEmpty } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class TagRequestDTO extends BaseModel implements StaticImplements<ApiMethods<TagRequestDTO>, typeof TagRequestDTO> {
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
