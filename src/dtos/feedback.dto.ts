import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class FeedbackDto extends BaseDto implements StaticImplements<ApiMethods<FeedbackDto>, typeof FeedbackDto> {
  @IsString()
  @IsNotEmpty()
  public subject: string;

  @IsString()
  @IsNotEmpty()
  public message: string;

  constructor(subject: string, message: string) {
    super();
    this.subject = subject;
    this.message = message;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): FeedbackDto {
    return new FeedbackDto('', '');
  }

  static examples(): { [key: string]: { value: FeedbackDto } } {
    return {
      FeedbackDto: {
        value: FeedbackDto.createEmpty(),
      },
    };
  }
}
