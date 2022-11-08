import { IsDate, IsMongoId, IsObject, IsOptional, IsString } from 'class-validator';
import { Validate } from '../interfaces/validate';
import { Hateoas } from './hateoas.model';

export abstract class BaseModel implements Validate {
  @IsOptional()
  @IsString()
  public type?: string | null | undefined;

  @IsOptional()
  @IsMongoId()
  public id: string | null | undefined;

  @IsOptional()
  @IsDate()
  public created_at: Date | null | undefined;

  @IsOptional()
  @IsDate()
  public updated_at: Date | null | undefined;

  @IsOptional()
  @IsObject()
  public links: Hateoas | {} | null | undefined;

  public buildHatoes(relations?: any) {}

  public abstract validate(): boolean;

  constructor(id?: string | null | undefined, created_at?: Date | null | undefined, updated_at?: Date, links?: Hateoas, type?: string) {
    this.id = id;
    this.created_at = created_at;
    this.updated_at = updated_at;
    if (links) {
      this.links = links;
    } else {
      this.links = {};
    }
    this.type = type;
  }
}
