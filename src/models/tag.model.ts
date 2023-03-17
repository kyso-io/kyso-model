import { IsMongoId, IsNotEmpty } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class Tag extends BaseModel implements StaticImplements<ApiMethods<Tag>, typeof Tag> {
  @IsMongoId()
  public organization_id: string;

  @IsMongoId()
  public team_id: string;

  @IsNotEmpty()
  public name: string;

  constructor(organization_id: string, team_id: string, name: string) {
    super();
    this.organization_id = organization_id;
    this.team_id = team_id;
    this.name = name;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): Tag {
    return new Tag('', '', '');
  }

  static examples(): { [key: string]: { value: Tag } } {
    return {
      Tag: {
        value: Tag.createEmpty(),
      },
    };
  }
}
