import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUIReportDTO {
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

  @IsOptional()
  public files: any[];

  constructor(title: string, organization: string, team: string, description: string, tags: string[], files: any[]) {
    this.title = title;
    this.organization = organization;
    this.team = team;
    this.description = description;
    this.tags = tags || [];
    this.files = files || [];
  }
}
