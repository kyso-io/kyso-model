import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateReportRequestDTO {
  @IsOptional()
  @IsNotEmpty()
  public title: string;

  @IsOptional()
  @IsString()
  public description: string;

  @IsOptional()
  @IsBoolean()
  public show_code: boolean;

  @IsOptional()
  @IsBoolean()
  public show_output: boolean;

  @IsOptional()
  @IsString()
  public main_file: string;

  @IsOptional()
  @IsString({ each: true })
  public tags: string[];

  @IsOptional()
  @IsString({ each: true })
  public author_emails: string[];

  constructor(title: string, description: string, show_code: boolean, show_output: boolean, main_file: string, tags: string[], author_emails: string[]) {
    this.title = title;
    this.description = description;
    this.show_code = show_code;
    this.show_output = show_output;
    this.main_file = main_file;
    this.tags = tags;
    this.author_emails = author_emails;
  }
}
