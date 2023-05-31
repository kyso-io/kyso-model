import { IsArray, IsBoolean, IsOptional, IsString } from '@nestjs/class-validator';
import * as jsYaml from 'js-yaml';
import { TableOfContentEntryDto } from '../dtos/table-of-content-entry.dto';
import { ReportType } from '../enums/report-type.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class KysoConfigFile extends BaseModel implements StaticImplements<ApiMethods<KysoConfigFile>, typeof KysoConfigFile> {
  @IsString()
  public main: string;

  @IsString()
  public title: string;

  @IsString()
  public description: string;

  @IsString()
  @IsOptional()
  public organization?: string;

  @IsString()
  @IsOptional()
  public team?: string;

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

  @IsOptional()
  @IsString()
  public url?: string;

  @IsOptional()
  @IsArray()
  public toc?: TableOfContentEntryDto[];

  constructor(main: string, title: string, description: string, organization: string, team: string, tags: string[], type?: ReportType | null) {
    super();
    this.main = main;
    this.title = title;
    this.description = description;
    this.organization = organization;
    this.team = team;
    this.channel = team;
    this.tags = tags || [];
    this.type = type;
  }

  static fromObject(object: any): { valid: boolean; message: string | null; kysoConfigFile: KysoConfigFile | null } {
    const validationResult: { valid: boolean; message: string } = KysoConfigFile.isValid(object);

    const kysoFile: KysoConfigFile = new KysoConfigFile(
      object.main ? object.main : null,
      object.title ? object.title : null,
      object.description ? object.description : null,
      object.organization ? object.organization : null,
      object.channel ? object.channel : object.team ? object.team : null,
      object.tags ? object.tags : [],
      object.type ? object.type : ReportType.Other,
    );

    // Now check and set the optional variables (less channel, which is already setted)
    if (object.hasOwnProperty('hideRoot')) {
      kysoFile.hideRoot = object.hideRoot;
    }

    if (object.hasOwnProperty('reports')) {
      kysoFile.reports = object.reports;
    }

    if (object.hasOwnProperty('preview')) {
      kysoFile.preview = object.preview;
    }

    if (object.hasOwnProperty('authors')) {
      kysoFile.authors = object.authors;
    }

    if (object.hasOwnProperty('url')) {
      kysoFile.url = object.url;
    }

    if (object.hasOwnProperty('toc')) {
      kysoFile.toc = object.toc;
    }

    if (validationResult.valid) {
      return {
        valid: true,
        message: null,
        kysoConfigFile: kysoFile,
      };
    } else {
      return {
        valid: validationResult.valid,
        message: validationResult.message,
        kysoConfigFile: null,
      };
    }
  }

  static fromYaml(yaml: string): { valid: boolean; message: string | null; kysoConfigFile: KysoConfigFile | null } {
    const object: any = jsYaml.load(yaml);
    return this.fromObject(object);
  }

  static fromJSON(json: string): { valid: boolean; message: string | null; kysoConfigFile: KysoConfigFile | null } {
    const object: any = JSON.parse(json);
    return this.fromObject(object);
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
    } else if (data.type === ReportType.Embedded) {
      if (!data.hasOwnProperty('url')) {
        return { valid: false, message: 'Property url is required' };
      } else if (data.url === null) {
        return { valid: false, message: 'Property url must be a string' };
      } else if (typeof data.url !== 'string') {
        return { valid: false, message: 'Property url must be a string' };
      } else {
        try {
          new URL(data.url);
        } catch (err) {
          return { valid: false, message: 'Property url must be a valid URL' };
        }
      }
    }

    if ((!data?.main || data.main.length === 0) && data.type !== ReportType.Embedded) {
      return { valid: false, message: 'Property main is required' };
    }

    if (!data?.title || data.title.length === 0) {
      return { valid: false, message: 'Property title is required' };
    }

    /* If there is a meta report on top these properties can be ommited
    if (!data?.organization || data.organization.length === 0) {
      return { valid: false, message: 'Property organization is required' };
    }

    if (!data?.team || data.team.length === 0) {
      if (!data?.channel || data.channel.length === 0) {
        return { valid: false, message: 'Property team or channel is required' };
      }
    }
    */

    if (data.hasOwnProperty('toc')) {
      const validateTableOfContentEntry = (tableOfcontententryDto: TableOfContentEntryDto): { valid: boolean; message: string } => {
        if (!tableOfcontententryDto.hasOwnProperty('title')) {
          return { valid: false, message: 'Property toc.title is required' };
        }
        if (!tableOfcontententryDto.hasOwnProperty('href')) {
          return { valid: false, message: 'Property toc.href is required' };
        }
        if (tableOfcontententryDto.hasOwnProperty('children')) {
          if (!Array.isArray(data.toc)) {
            return { valid: false, message: 'Property children must be an array' };
          }
          for (const child of tableOfcontententryDto.children!) {
            const childValidation: { valid: boolean; message: string } = validateTableOfContentEntry(child);
            if (!childValidation.valid) {
              return childValidation;
            }
          }
        }
        return { valid: true, message: '' };
      };
      if (!Array.isArray(data.toc)) {
        return { valid: false, message: 'Property toc must be an array' };
      }
      for (const toce of data.toc) {
        const childValidation: { valid: boolean; message: string } = validateTableOfContentEntry(toce);
        if (!childValidation.valid) {
          return childValidation;
        }
      }
    }

    return { valid: true, message: '' };
  }

  validate(): boolean {
    return KysoConfigFile.isValid(this).valid;
  }

  static createEmpty(): KysoConfigFile {
    return new KysoConfigFile('', '', '', '', '', []);
  }

  static examples(): { [key: string]: { value: KysoConfigFile } } {
    return {
      KysoConfigFile: {
        value: KysoConfigFile.createEmpty(),
      },
    };
  }
}
