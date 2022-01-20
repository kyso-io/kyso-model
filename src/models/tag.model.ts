import { IsNotEmpty } from 'class-validator';
import { BaseModel } from './base.model';

export class Tag extends BaseModel {
  @IsNotEmpty()
  public name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}
