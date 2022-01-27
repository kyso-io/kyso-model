import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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

  @IsInt({ each: true })
  public original_sizes: number[];

  constructor(title: string, organization: string, team: string, description: string, original_sizes: number[]) {
    this.title = title;
    this.organization = organization;
    this.team = team;
    this.description = description;
    this.original_sizes = original_sizes;
  }
}
