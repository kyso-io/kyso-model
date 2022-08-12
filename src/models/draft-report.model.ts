import { CreateReportFileSystemItemDTO } from '../dtos/create-report-file-system-item.dto';
import { ReportStatus } from '../enums/report-status.enum';
import { RepositoryProvider } from '../enums/repository-provider.enum';
import { BaseModel } from './base.model';

export class DraftReport extends BaseModel {
  public title: string;
  public description: string;
  public creator_user_id: string;
  public team_id: string;
  public organization_id: string;
  public author_ids: string[];
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
  public user_local_filesystem_files: any[]

  constructor(
    title: string,
    description: string,
    creator_user_id: string,
    team_id: string,
    organization_id: string,
    author_ids: string[],
    preview_picture: string,
    files: CreateReportFileSystemItemDTO[],
    user_local_filesystem_files: any[]
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
}
