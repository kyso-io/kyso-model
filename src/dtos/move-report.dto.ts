import { IsMongoId, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class MoveReportDto extends BaseDto implements StaticImplements<ApiMethods<MoveReportDto>, typeof MoveReportDto> {
  @IsMongoId()
  public reportId: string;

  @IsMongoId()
  public sourceTeamId: string;

  @IsMongoId()
  public targetTeamId: string;

  @IsString()
  public title: string;

  constructor(reportId: string, sourceTeamId: string, targetTeamId: string, title: string) {
    super();
    this.reportId = reportId;
    this.sourceTeamId = sourceTeamId;
    this.targetTeamId = targetTeamId;
    this.title = title;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): MoveReportDto {
    return new MoveReportDto('', '', '', '');
  }

  static examples(): { [key: string]: { value: MoveReportDto } } {
    return {
      MoveReportDto: {
        value: MoveReportDto.createEmpty(),
      },
    };
  }
}
