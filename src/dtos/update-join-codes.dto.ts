import { IsBoolean, IsDateString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class UpdateJoinCodesDto extends BaseDto implements StaticImplements<ApiMethods<UpdateJoinCodesDto>, typeof UpdateJoinCodesDto> {
  @IsBoolean()
  public enabled: boolean;

  @IsDateString()
  public valid_until: Date;

  constructor(enabled: boolean, valid_until: Date) {
    super();
    this.enabled = enabled;
    this.valid_until = valid_until;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateJoinCodesDto {
    return new UpdateJoinCodesDto(false, new Date());
  }

  static examples(): { [key: string]: { value: UpdateJoinCodesDto } } {
    return {
      JoinCodesDto: {
        value: UpdateJoinCodesDto.createEmpty(),
      },
    };
  }
}
