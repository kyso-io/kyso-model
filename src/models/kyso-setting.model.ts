import { IsString } from 'class-validator';
import { BaseModel } from '..';

export class KysoSetting extends BaseModel {
  @IsString()
  public key: string;

  @IsString()
  public description: string;

  @IsString()
  public value: string;

  constructor(key: string, description: string, value: string) {
    super()
    this.key = key;
    this.description = description;
    this.value = value;
  }
}
