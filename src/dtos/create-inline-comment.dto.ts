import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateInlineCommentDto {
  @IsMongoId()
  public report_id!: string;

  @IsString()
  @IsNotEmpty()
  public cell_id!: string;

  @IsString()
  @IsNotEmpty()
  public text!: string;

  @IsOptional()
  @IsMongoId({ each: true })
  public mentions!: string[];

}
