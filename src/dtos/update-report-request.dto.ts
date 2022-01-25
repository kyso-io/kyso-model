import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateReportRequestDTO {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  public description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
