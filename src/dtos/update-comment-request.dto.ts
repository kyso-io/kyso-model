import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateCommentRequestDTO {
  @IsNotEmpty()
  @IsString()
  public text: string;

  @IsBoolean()
  public marked: boolean;

  constructor(text: string, marked: boolean) {
    this.text = text;
    this.marked = marked;
  }
}
