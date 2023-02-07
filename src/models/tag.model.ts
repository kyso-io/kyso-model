import { IsNotEmpty } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class Tag extends BaseModel implements StaticImplements<ApiMethods<Tag>, typeof Tag> {
  @IsNotEmpty()
  public name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): Tag {
    return new Tag('');
  }

  static examples(): { [key: string]: { value: Tag } } {
    return {
      Tag: {
        value: Tag.createEmpty(),
      },
    };
  }
}
