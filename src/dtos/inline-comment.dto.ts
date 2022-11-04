import { IsMongoId, IsOptional } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class InlineCommentDto extends BaseModel implements StaticImplements<ApiMethods<InlineCommentDto>, typeof InlineCommentDto> {
  public id: string;
  public created_at: Date;
  public updated_at: Date;
  public report_id: string;
  public cell_id: string;
  public user_id: string;
  public text: string;
  public edited: boolean;
  public markedAsDeleted: boolean;
  public user_name: string;
  public user_avatar: string;

  @IsOptional()
  @IsMongoId({ each: true })
  public mentions: string[];

  constructor(
    id: string,
    created_at: Date,
    updated_at: Date,
    report_id: string,
    cell_id: string,
    user_id: string,
    text: string,
    edited: boolean,
    markedAsDeleted: boolean,
    user_name: string,
    user_avatar: string,
    mentions: string[],
  ) {
    super();
    this.id = id;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.report_id = report_id;
    this.cell_id = cell_id;
    this.user_id = user_id;
    this.text = text;
    this.edited = edited;
    this.markedAsDeleted = markedAsDeleted;
    this.user_name = user_name;
    this.user_avatar = user_avatar;
    this.mentions = mentions;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): InlineCommentDto {
    return new InlineCommentDto('', new Date(), new Date(), '', '', '', '', false, false, '', '', []);
  }

  static examples(): { [key: string]: { value: InlineCommentDto } } {
    return {
      InlineCommentDto: {
        value: InlineCommentDto.createEmpty(),
      },
    };
  }
}
