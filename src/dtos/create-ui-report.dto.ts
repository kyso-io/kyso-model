import { IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class CreateUIReportDTO extends BaseDto implements StaticImplements<ApiMethods<CreateUIReportDTO>, typeof CreateUIReportDTO> {
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
    super();
    this.title = title;
    this.organization = organization;
    this.team = team;
    this.description = description;
    this.tags = tags || [];
    this.files = files || [];
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): CreateUIReportDTO {
    return new CreateUIReportDTO('', '', '', '', [], []);
  }

  static examples(): { [key: string]: { value: CreateUIReportDTO } } {
    return {
      CreateUIReportDTO: {
        value: CreateUIReportDTO.createEmpty(),
      },
    };
  }
}
