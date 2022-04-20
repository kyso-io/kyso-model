import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateInlineCommentDto {
  @IsMongoId()
  public report_id!: string;

  @IsString()
  @IsNotEmpty()
  public cell_id!: string;

  @IsString()
  @IsNotEmpty()
  public text!: string;
}
