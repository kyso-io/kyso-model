import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class UpdateReportRequestDTO extends BaseModel implements StaticImplements<ApiMethods<UpdateReportRequestDTO>, typeof UpdateReportRequestDTO> {
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

  constructor(title: string, description: string, show_code: boolean, show_output: boolean, main_file: string, tags: string[], author_emails: string[]) {
    super();
    this.title = title;
    this.description = description;
    this.show_code = show_code;
    this.show_output = show_output;
    this.main_file = main_file;
    this.tags = tags;
    this.author_emails = author_emails;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateReportRequestDTO {
    return new UpdateReportRequestDTO('', '', false, false, '', [], []);
  }

  static examples(): { [key: string]: { value: UpdateReportRequestDTO } } {
    return {
      UpdateReportRequestDTO: {
        value: UpdateReportRequestDTO.createEmpty(),
      },
    };
  }
}
