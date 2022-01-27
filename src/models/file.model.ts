import { BaseModel } from './base.model';

export class File extends BaseModel {
  public report_id: string;
  public name: string;
  public path_s3: string;
  public size: number;
  public sha: string;
  public version: number;

  constructor(
    report_id: string,
    name: string,
    path_s3: string,
    size: number,
    sha: string,
    version: number
  ) {
    super();
    this.report_id = report_id;
    this.name = name;
    this.path_s3 = path_s3;
    this.size = size;
    this.sha = sha;
    this.version = version;
  }
}