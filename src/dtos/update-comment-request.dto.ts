import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class UpdateCommentRequestDTO extends BaseModel implements StaticImplements<ApiMethods<UpdateCommentRequestDTO>, typeof UpdateCommentRequestDTO> {
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
