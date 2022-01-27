import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateKysoReportDTO {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  public organization: string;

  @IsString()
  public team: string;

  @IsOptional()
  @IsString()
  public description: string;

  @IsArray()
  public original_sizes: string[];

  @IsString({ each: true })
  public original_names: string[];

  constructor(title: string, organization: string, team: string, description: string, original_sizes: string[], original_names: string[]) {
    this.title = title;
    this.organization = organization;
    this.team = team;
    this.description = description;
    this.original_sizes = original_sizes;
    this.original_names = original_names;
  }
}
