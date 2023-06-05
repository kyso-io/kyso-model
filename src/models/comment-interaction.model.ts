import { IsDate, IsMongoId, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class CommentInteraction extends BaseModel implements StaticImplements<ApiMethods<CommentInteraction>, typeof CommentInteraction> {
  @IsDate()
  public timestamp: Date;

  @IsString()
  @IsMongoId()
  public user_id: string;

  @IsString()
  public action: 'new' | 'reply' | 'reply_to_reply';

  @IsString()
  @IsMongoId()
  public comment_id: string;

  constructor() {
    super();
    this.timestamp = new Date();
    this.user_id = '';
    this.action = 'new';
    this.comment_id = '';
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): CommentInteraction {
    return new CommentInteraction();
  }

  static examples(): { [key: string]: { value: CommentInteraction } } {
    return {
      Tag: {
        value: CommentInteraction.createEmpty(),
      },
    };
  }
}
