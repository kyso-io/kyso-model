import { InlineCommentStatusEnum } from '../enums/inline-comment-status.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class InlineCommentStatusHistoryDto extends BaseDto implements StaticImplements<ApiMethods<InlineCommentStatusHistoryDto>, typeof InlineCommentStatusHistoryDto> {
  public date: Date;
  public from_status: InlineCommentStatusEnum;
  public to_status: InlineCommentStatusEnum;
  public user_id: string;
  public report_version: number;

  constructor(date: Date, from_status: InlineCommentStatusEnum, to_status: InlineCommentStatusEnum, user_id: string, report_version: number) {
    super();
    this.date = date;
    this.from_status = from_status;
    this.to_status = to_status;
    this.user_id = user_id;
    this.report_version = report_version;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): InlineCommentStatusHistoryDto {
    return new InlineCommentStatusHistoryDto(new Date(), InlineCommentStatusEnum.OPEN, InlineCommentStatusEnum.OPEN, '', 0);
  }

  static examples(): { [key: string]: { value: InlineCommentStatusHistoryDto } } {
    return {
      InlineCommentStatusHistoryDto: {
        value: InlineCommentStatusHistoryDto.createEmpty(),
      },
    };
  }
}
