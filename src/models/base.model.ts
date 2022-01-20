
import { IsDate, IsOptional, IsUUID } from 'class-validator';
import { Hateoas } from './hateoas.model';

export class BaseModel {
  public type?: string;

  @IsUUID()
  @IsOptional()
  public id?: string;

  @IsDate()
  @IsOptional()
  public created_at?: Date;

  @IsDate()
  @IsOptional()
  public updated_at?: Date;

  public links: Hateoas | {};

  public buildHatoes(relations?: any) {}

  constructor(id?: string, created_at?: Date, updated_at?: Date, links?: Hateoas) {
    this.id = id;
    this.created_at = created_at;
    this.updated_at = updated_at;
    if (links) {
      this.links = links;
    } else {
      this.links = {};
    }
  }
}
