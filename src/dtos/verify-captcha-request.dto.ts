import { IsNotEmpty, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class VerifyCaptchaRequestDto extends BaseModel implements StaticImplements<ApiMethods<VerifyCaptchaRequestDto>, typeof VerifyCaptchaRequestDto> {
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
