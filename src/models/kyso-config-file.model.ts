import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';
import { ReportType } from '../enums/report-type.enum';

export class KysoConfigFile {
  @IsString()
  public main: string;

  @IsString()
  public title: string;

  @IsString()
  public description: string;

  @IsString()
  public organization: string;

  @IsString()
  public team: string;

  @IsOptional()
  @IsString({ each: true })
  public tags: string[];

  @IsString()
  public type: ReportType | null;

  @IsOptional()
  @IsBoolean()
  public hideRoot?: boolean;

  @IsArray()
  @IsString({ each: true })
  public reports?: string[];

  @IsOptional()
  @IsString()
  public preview?: string;

  constructor(main: string, title: string, description: string, organization: string, team: string, tags: string[], type: ReportType | null) {
    this.main = main;
    this.title = title;
    this.description = description;
    this.organization = organization;
    this.team = team;
    this.tags = tags || [];
    this.type = type;
  }

  static isValid(data: any): boolean {
    return (
      data?.main &&
      data.main.length > 0 &&
      data?.title &&
      data.title.length > 0 &&
      data?.description &&
      data.description.length > 0 &&
      data?.organization &&
      data.organization.length > 0 &&
      data?.team &&
      data.team.length > 0
    );
  }
}
