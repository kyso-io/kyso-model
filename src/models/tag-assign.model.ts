import { IsEnum, IsMongoId } from 'class-validator';
import { EntityEnum } from '../enums/entity.enum';
import { BaseModel } from './base.model';

export class TagAssign extends BaseModel {
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
}
