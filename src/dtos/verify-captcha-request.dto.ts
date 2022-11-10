import { IsNotEmpty, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class VerifyCaptchaRequestDto extends BaseDto implements StaticImplements<ApiMethods<VerifyCaptchaRequestDto>, typeof VerifyCaptchaRequestDto> {
  @IsString()
  @IsNotEmpty()
  public token!: string;

  constructor(token: string) {
    super();
    this.token = token;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): VerifyCaptchaRequestDto {
    return new VerifyCaptchaRequestDto('');
  }

  static examples(): { [key: string]: { value: VerifyCaptchaRequestDto } } {
    return {
      VerifyCaptchaRequestDto: {
        value: VerifyCaptchaRequestDto.createEmpty(),
      },
    };
  }
}
