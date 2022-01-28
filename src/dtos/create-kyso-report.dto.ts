import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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

  @IsOptional()
  @IsString({ each: true })
  public tags: string[];

  @IsArray()
  public original_sizes: string[];

  @IsString({ each: true })
  public original_names: string[];

  @IsString({ each: true })
  public original_shas: string[];

  constructor(title: string, organization: string, team: string, description: string, tags: string[], original_sizes: string[], original_names: string[], original_shas: string[]) {
    this.title = title;
    this.organization = organization;
    this.team = team;
    this.description = description;
    this.tags = tags || [];
    this.original_sizes = original_sizes;
    this.original_names = original_names;
    this.original_shas = original_shas;
  }
}
