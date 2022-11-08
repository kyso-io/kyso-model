import { IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class UpdateKysoSettingDto extends BaseModel implements StaticImplements<ApiMethods<UpdateKysoSettingDto>, typeof UpdateKysoSettingDto> {
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
