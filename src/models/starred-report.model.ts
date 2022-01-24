import { IsMongoId } from 'class-validator';
import { BaseModel } from './base.model';

export class StarredReport extends BaseModel {
  @IsMongoId()
  public report_id: string;

  @IsMongoId()
  public user_id: string;

  constructor(report_id: string, user_id: string) {
    super();
    this.report_id = report_id;
    this.user_id = user_id;
  }
}
