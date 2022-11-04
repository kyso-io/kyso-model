import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class CreateInlineCommentDto extends BaseModel implements StaticImplements<ApiMethods<CreateInlineCommentDto>, typeof CreateInlineCommentDto> {
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
