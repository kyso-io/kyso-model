import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class KysoDataModelVersion {
  
  @IsMongoId()
  @IsNotEmpty()
  public _id: string;

  @IsString()
  @IsNotEmpty()
  public collection: string;

  @IsNumber()
  public version: number;

  constructor() {
    this._id = "";
    this.collection = "";
    this.version = -1;
  }

}
