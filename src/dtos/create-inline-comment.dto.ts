import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class CreateInlineCommentDto extends BaseDto implements StaticImplements<ApiMethods<CreateInlineCommentDto>, typeof CreateInlineCommentDto> {
  @IsMongoId()
  public report_id: string;

  @IsString()
  @IsNotEmpty()
  public cell_id: string;

  @IsString()
  @IsNotEmpty()
  public text: string;

  @IsOptional()
  @IsMongoId({ each: true })
  public mentions: string[];

  constructor(report_id: string, cell_id: string, text: string, mentions: string[]) {
    super();
    this.report_id = report_id;
    this.cell_id = cell_id;
    this.text = text;
    this.mentions = mentions;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): CreateInlineCommentDto {
    return new CreateInlineCommentDto('', '', '', []);
  }

  static examples(): { [key: string]: { value: CreateInlineCommentDto } } {
    return {
      CreateInlineCommentDto: {
        value: CreateInlineCommentDto.createEmpty(),
      },
    };
  }
}
