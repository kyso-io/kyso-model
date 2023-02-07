import { IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class UpdateKysoSettingDto extends BaseDto implements StaticImplements<ApiMethods<UpdateKysoSettingDto>, typeof UpdateKysoSettingDto> {
  @IsString()
  public value: string;

  constructor(value: string) {
    super();
    this.value = value;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateKysoSettingDto {
    return new UpdateKysoSettingDto('');
  }

  static examples(): { [key: string]: { value: UpdateKysoSettingDto } } {
    return {
      UpdateKysoSettingDto: {
        value: UpdateKysoSettingDto.createEmpty(),
      },
    };
  }
}
