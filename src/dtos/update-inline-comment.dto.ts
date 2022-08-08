import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateInlineCommentDto {
  @IsString()
  @IsNotEmpty()
  public text!: string;

  @IsOptional()
  @IsMongoId({ each: true })
  public mentions!: string[];
}
