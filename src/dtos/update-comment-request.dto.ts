import { IsBoolean, IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class UpdateCommentRequestDTO extends BaseDto implements StaticImplements<ApiMethods<UpdateCommentRequestDTO>, typeof UpdateCommentRequestDTO> {
  @IsNotEmpty()
  @IsString()
  public text: string;

  @IsBoolean()
  public marked: boolean;

  constructor(text: string, marked: boolean) {
    super();
    this.text = text;
    this.marked = marked;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateCommentRequestDTO {
    return new UpdateCommentRequestDTO('', false);
  }

  static examples(): { [key: string]: { value: UpdateCommentRequestDTO } } {
    return {
      UpdateCommentRequestDTO: {
        value: UpdateCommentRequestDTO.createEmpty(),
      },
    };
  }
}
