import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class KysoDataModelVersion extends BaseModel implements StaticImplements<ApiMethods<KysoDataModelVersion>, typeof KysoDataModelVersion> {
  @IsMongoId()
  @IsNotEmpty()
  public _id: string;

  @IsString()
  @IsNotEmpty()
  public collection: string;

  @IsNumber()
  public version: number;

  constructor() {
    super();
    this._id = '';
    this.collection = '';
    this.version = -1;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): KysoDataModelVersion {
    return new KysoDataModelVersion();
  }

  static examples(): { [key: string]: { value: KysoDataModelVersion } } {
    return {
      KysoDataModelVersion: {
        value: KysoDataModelVersion.createEmpty(),
      },
    };
  }
}
