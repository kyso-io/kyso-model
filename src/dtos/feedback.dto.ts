import { IsNotEmpty, IsString } from 'class-validator';

export class FeedbackDto {
  @IsString()
  @IsNotEmpty()
  public subject: string;

  @IsString()
  @IsNotEmpty()
  public message: string;

  constructor(subject: string, message: string) {
    this.subject = subject;
    this.message = message;
  }
}
