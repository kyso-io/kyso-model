import { IsBoolean, IsDateString, IsNotEmpty } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class JoinCodes extends BaseDto implements StaticImplements<ApiMethods<JoinCodes>, typeof JoinCodes> {
  @IsNotEmpty()
  public reader: string;

  @IsNotEmpty()
  public contributor: string;

  @IsBoolean()
  public enabled: boolean;

  @IsDateString()
  public valid_until: Date;

  constructor(reader: string, contributor: string, enabled: boolean, valid_until: Date) {
    super();
    this.reader = reader;
    this.contributor = contributor;
    this.enabled = enabled;
    this.valid_until = valid_until;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): JoinCodes {
    return new JoinCodes('', '', false, new Date());
  }

  static examples(): { [key: string]: { value: JoinCodes } } {
    return {
      JoinCodesDto: {
        value: JoinCodes.createEmpty(),
      },
    };
  }
}
