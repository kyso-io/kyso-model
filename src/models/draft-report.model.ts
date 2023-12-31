import { IsArray, IsMongoId, IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator';
import { CreateReportFileSystemItemDTO } from '../dtos/create-report-file-system-item.dto';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class DraftReport extends BaseModel implements StaticImplements<ApiMethods<DraftReport>, typeof DraftReport> {
  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public description: string;

  @IsNotEmpty()
  @IsMongoId()
  public creator_user_id: string;

  @IsNotEmpty()
  @IsMongoId()
  public team_id: string;

  @IsNotEmpty()
  @IsMongoId()
  public organization_id: string;

  @IsNotEmpty()
  @IsArray()
  public author_ids: string[];

  @IsOptional()
  @IsString()
  public preview_picture: string;

  /**
   * Files created throught the UI
   */
  public files: CreateReportFileSystemItemDTO[];

  /**
   * Files uploaded from the user's filesystem.
   *
   * Without type for now
   */
  public user_local_filesystem_files: any[];

  constructor(
    title: string,
    description: string,
    creator_user_id: string,
    team_id: string,
    organization_id: string,
    author_ids: string[],
    preview_picture: string,
    files: CreateReportFileSystemItemDTO[],
    user_local_filesystem_files: any[],
  ) {
    super();
    this.title = title;
    this.description = description;
    this.creator_user_id = creator_user_id;
    this.team_id = team_id;
    this.organization_id = organization_id;
    this.author_ids = author_ids;
    this.preview_picture = preview_picture;
    this.files = files;
    this.user_local_filesystem_files = user_local_filesystem_files;
  }

  public static swaggerExamples(): any {
    return {
      'Base object': {
        summary: 'Base object',
        value: new DraftReport('title', 'description', 'creator_user_id', 'team_id', 'organization_id', [], '', [], []),
      },
      Example: {
        summary: 'Example',
        value: new DraftReport(
          'My awesome report',
          'This is my description',
          '62f673e51315a21d21ac51f3',
          '62f673eeac3f21b5fac7cb99',
          '62f673f4d588100d9e2a1370',
          ['62f673fcb38f748212e9260d', '62f67403d88724f93da4b1a6'],
          'https://images.unsplash.com/photo-1590925888274-723778397410?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGh1c2t5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
          [
            new CreateReportFileSystemItemDTO(
              '62f67449e864e316fc3b5595',
              'index.md',
              'index.md',
              'md',
              `## This is a draft

                * And this is
                * an example
              `,
            ),
          ],
          [],
        ),
      },
    };
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): DraftReport {
    return new DraftReport('', '', '', '', '', [], '', [], []);
  }

  static examples(): { [key: string]: { value: DraftReport } } {
    return {
      DraftReport: {
        value: DraftReport.createEmpty(),
      },
    };
  }
}
