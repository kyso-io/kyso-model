import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class UpdateInlineCommentDto extends BaseModel implements StaticImplements<ApiMethods<UpdateInlineCommentDto>, typeof UpdateInlineCommentDto> {
  @IsString()
  @IsNotEmpty()
  public text: string;

  @IsOptional()
  @IsMongoId({ each: true })
  public mentions: string[];

  constructor(text: string, mentions: string[]) {
    super();
    this.text = text;
    this.mentions = mentions;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateInlineCommentDto {
    return new UpdateInlineCommentDto('', []);
  }

  static examples(): { [key: string]: { value: UpdateInlineCommentDto } } {
    return {
      UpdateInlineCommentDto: {
        value: UpdateInlineCommentDto.createEmpty(),
      },
    };
  }
}
