import { IsDateString, IsNotEmpty, IsOptional } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class CreateKysoAccessTokenDto extends BaseDto implements StaticImplements<ApiMethods<CreateKysoAccessTokenDto>, typeof CreateKysoAccessTokenDto> {
  @IsNotEmpty()
  public name: string;

  @IsOptional()
  @IsDateString()
  public expiration_date?: Date;

  constructor(name: string, expiration_date?: Date) {
    super();
    this.name = name;
    this.expiration_date = expiration_date;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): CreateKysoAccessTokenDto {
    return new CreateKysoAccessTokenDto('', new Date());
  }

  static examples(): { [key: string]: { value: CreateKysoAccessTokenDto } } {
    return {
      CreateKysoAccessTokenDto: {
        value: CreateKysoAccessTokenDto.createEmpty(),
      },
    };
  }
}
