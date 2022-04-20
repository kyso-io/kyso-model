import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateInlineCommentDto {
  @IsString()
  @IsNotEmpty()
  public text!: string;
}
