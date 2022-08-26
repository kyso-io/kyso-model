import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';
import { ReportType } from '../enums/report-type.enum';
import * as jsYaml from 'js-yaml'

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
  @IsOptional()
  public type?: ReportType | null;

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

  @IsOptional()
  @IsString()
  public channel?: string;
  
  constructor(main: string, title: string, description: string, organization: string, team: string, tags: string[], type?: ReportType | null) {
    this.main = main;
    this.title = title;
    this.description = description;
    this.organization = organization;
    this.team = team;
    this.channel = team;
    this.tags = tags || [];
    this.type = type;
  }

  static fromObject(object: any): KysoConfigFile | null {
    try {
      const validationResult = KysoConfigFile.isValid(object);
      if(validationResult.valid) {
        const kysoFile: KysoConfigFile = new KysoConfigFile(
          object.main, 
          object.title,
          object.description,
          object.organization,
          object.channel ? object.channel : object.team,
          object.tags, 
          object.type ? object.type : ReportType.Other
        );

        // Now check and set the optional variables (less channel, which is already setted)
        if(object.hasOwnProperty("hideRoot")) {
          kysoFile.hideRoot = object.hideRoot;
        }

        if(object.hasOwnProperty("reports")) {
          kysoFile.reports = object.reports;
        }

        if(object.hasOwnProperty("preview")) {
          kysoFile.preview = object.preview;
        }

        if(object.hasOwnProperty("authors")) {
          kysoFile.authors = object.authors;
        }

        return kysoFile;
      } else {
        console.log(`Provided yaml file has an invalid format: ${validationResult.message}`);
        return null;
      }
    } catch(ex) {
      console.log(`Unexpected error parsing kyso.yaml file`);
      return null;
    }
  }

  static fromYaml(yaml: string): KysoConfigFile | null {
    const object: any = jsYaml.load(yaml);
    return this.fromObject(object)
  }

  static fromJSON(json: string): KysoConfigFile | null {
    const object: any = JSON.parse(json);

    return this.fromObject(object)
  }

  static isValid(data: any): { valid: boolean; message: string } {
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
      if (!data?.channel || data.channel.length === 0) {
        return { valid: false, message: 'Property team or channel is required' };
      }
    }

    return { valid: true, message: '' };
  }
}
