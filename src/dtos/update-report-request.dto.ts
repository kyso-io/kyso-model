import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';
import { TableOfContentEntryDto } from './table-of-content-entry.dto';

export class UpdateReportRequestDTO extends BaseDto implements StaticImplements<ApiMethods<UpdateReportRequestDTO>, typeof UpdateReportRequestDTO> {
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

  @IsArray()
  public toc: TableOfContentEntryDto[];

  constructor(title: string, description: string, show_code: boolean, show_output: boolean, main_file: string, tags: string[], author_emails: string[], toc: TableOfContentEntryDto[]) {
    super();
    this.title = title;
    this.description = description;
    this.show_code = show_code;
    this.show_output = show_output;
    this.main_file = main_file;
    this.tags = tags;
    this.author_emails = author_emails;
    this.toc = toc;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateReportRequestDTO {
    return new UpdateReportRequestDTO('', '', false, false, '', [], [], []);
  }

  static examples(): { [key: string]: { value: UpdateReportRequestDTO } } {
    return {
      UpdateReportRequestDTO: {
        value: UpdateReportRequestDTO.createEmpty(),
      },
    };
  }
}
