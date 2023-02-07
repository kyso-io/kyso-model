import { IsEnum, IsMongoId } from '@nestjs/class-validator';
import { EntityEnum } from '../enums/entity.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class TagAssign extends BaseModel implements StaticImplements<ApiMethods<TagAssign>, typeof TagAssign> {
  @IsMongoId()
  public tag_id: string;

  @IsMongoId()
  public entity_id: string;

  @IsEnum(EntityEnum)
  public type: EntityEnum;

  constructor(tag_id: string, entity_id: string, type: EntityEnum) {
    super();
    this.tag_id = tag_id;
    this.entity_id = entity_id;
    this.type = type;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): TagAssign {
    return new TagAssign('', '', EntityEnum.COMMENT);
  }

  static examples(): { [key: string]: { value: TagAssign } } {
    return {
      TagAssign: {
        value: TagAssign.createEmpty(),
      },
    };
  }
}
