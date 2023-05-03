import { IsMongoId, IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class CreateInlineCommentDto extends BaseDto implements StaticImplements<ApiMethods<CreateInlineCommentDto>, typeof CreateInlineCommentDto> {
  @IsMongoId()
  public report_id: string;

  @IsMongoId()
  public file_id: string;

  @IsString()
  @IsNotEmpty()
  public cell_id: string;

  @IsString()
  @IsNotEmpty()
  public text: string;

  @IsOptional()
  @IsMongoId({ each: true })
  public mentions: string[];

  @IsOptional()
  @IsMongoId()
  public parent_comment_id: string | null;

  constructor(report_id: string, file_id: string, cell_id: string, text: string, mentions: string[], parent_comment_id: string | null) {
    super();
    this.report_id = report_id;
    this.file_id = file_id;
    this.cell_id = cell_id;
    this.text = text;
    this.mentions = mentions;
    this.parent_comment_id = parent_comment_id;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): CreateInlineCommentDto {
    return new CreateInlineCommentDto('', '', '', '', [], null);
  }

  static examples(): { [key: string]: { value: CreateInlineCommentDto } } {
    return {
      CreateInlineCommentDto: {
        value: CreateInlineCommentDto.createEmpty(),
      },
    };
  }
}
