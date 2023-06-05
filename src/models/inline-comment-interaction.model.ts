import { IsDate, IsMongoId, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class InlineCommentInteraction extends BaseModel implements StaticImplements<ApiMethods<InlineCommentInteraction>, typeof InlineCommentInteraction> {
  @IsDate()
  public timestamp: Date;

  @IsString()
  @IsMongoId()
  public user_id: string;

  @IsString()
  public action: 'new' | 'reply';

  @IsString()
  @IsMongoId()
  public inline_comment_id: string;

  constructor() {
    super();
    this.timestamp = new Date();
    this.user_id = '';
    this.action = 'new';
    this.inline_comment_id = '';
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): InlineCommentInteraction {
    return new InlineCommentInteraction();
  }

  static examples(): { [key: string]: { value: InlineCommentInteraction } } {
    return {
      Tag: {
        value: InlineCommentInteraction.createEmpty(),
      },
    };
  }
}
