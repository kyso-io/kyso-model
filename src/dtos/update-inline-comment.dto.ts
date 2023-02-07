import { IsMongoId, IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class UpdateInlineCommentDto extends BaseDto implements StaticImplements<ApiMethods<UpdateInlineCommentDto>, typeof UpdateInlineCommentDto> {
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
