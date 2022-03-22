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

  constructor(title: string, description: string, show_code: boolean, show_output: boolean, main_file: string) {
    this.title = title;
    this.description = description;
    this.show_code = show_code;
    this.show_output = show_output;
    this.main_file = main_file;
  }
}
