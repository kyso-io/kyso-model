import { TableOfContentEntryDto } from '../dtos/table-of-content-entry.dto';
import { ApiMethods } from '../interfaces/api-methods';
import { GitMetadata } from '../interfaces/git-metadata';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';
import { ColumnStats } from './column-stats.model';

export class File extends BaseModel implements StaticImplements<ApiMethods<File>, typeof File> {
  public report_id: string;
  public name: string;
  public path_scs: string;
  public size: number;
  public sha: string;
  public version: number;
  public message: string;
  public git_metadata: GitMetadata | null;
  public toc: TableOfContentEntryDto[];
  public columns_stats: ColumnStats[];

  constructor(
    report_id: string,
    name: string,
    path_scs: string,
    size: number,
    sha: string,
    version: number,
    message: string,
    git_metadata: GitMetadata | null,
    toc: TableOfContentEntryDto[],
    columns_stats: ColumnStats[],
  ) {
    super();
    this.report_id = report_id;
    this.name = name;
    this.path_scs = path_scs;
    this.size = size;
    this.sha = sha;
    this.version = version;
    this.message = message;
    this.git_metadata = git_metadata;
    this.toc = toc;
    this.columns_stats = columns_stats;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): File {
    return new File('', '', '', 0, '', 0, '', null, [], []);
  }

  static examples(): { [key: string]: { value: File } } {
    return {
      File: {
        value: File.createEmpty(),
      },
    };
  }
}
