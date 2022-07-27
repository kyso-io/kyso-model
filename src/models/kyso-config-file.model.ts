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
  private _team: string;

  @IsOptional()
  @IsString({ each: true })
  public tags: string[];

  @IsString()
  public type: ReportType | null;

  @IsOptional()
  @IsBoolean()
  public hideRoot?: boolean;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  public reports?: string[];

  @IsOptional()
  @IsString()
  public preview?: string;

  @IsOptional()
  @IsArray()
  public authors?: string[];
  
  public get team(): string {
    if(this._team) {
      return this._team;
    } else if(this.channel) {
      return this.channel;
    } else {
      return "";
    }
  }

  public set team(team: string) {
    this._team = team;
    this.channel = team;
  }

  public get channel(): string {
    return this.team;
  }

  public set channel(channel: string) {
    this.team = channel;
  }

  constructor(main: string, title: string, description: string, organization: string, team: string, tags: string[], type: ReportType | null) {
    this.main = main;
    this.title = title;
    this.description = description;
    this.organization = organization;
    this._team = team;
    this.channel = team;
    this.tags = tags || [];
    this.type = type;
  }

  static isValid(data: any): { valid: boolean; message: string } {
    const types = Object.values(ReportType);
    if (!data?.type || data.type.length === 0 || !types.includes(data.type)) {
      return { valid: false, message: `Property type is required. Valid values: ${types.join(', ')}` };
    }

    if (data.type === ReportType.Meta) {
      if (!data.hasOwnProperty('reports')) {
        return { valid: false, message: 'Property reports is required' };
      } else if (data.reports === null) {
        return { valid: false, message: 'Property reports must be an array' };
      } else if (!Array.isArray(data.reports)) {
        return { valid: false, message: 'Property reports must be an array' };
      } else if (data.reports.length === 0) {
        return { valid: false, message: 'Property reports must have at least one element' };
      } else {
        return { valid: true, message: '' };
      }
    }

    if (!data?.main || data.main.length === 0) {
      return { valid: false, message: 'Property main is required' };
    }

    if (!data?.title || data.title.length === 0) {
      return { valid: false, message: 'Property title is required' };
    }

    if (!data?.organization || data.organization.length === 0) {
      return { valid: false, message: 'Property organization is required' };
    }

    if (!data?.team || data.team.length === 0) {
      return { valid: false, message: 'Property team is required' };
    }

    return { valid: true, message: '' };
  }
}
