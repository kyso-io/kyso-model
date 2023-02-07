import { IsBoolean, IsMongoId, IsNotEmpty, IsOptional } from '@nestjs/class-validator';
import { BaseModel } from './base.model';

export abstract class BaseComment extends BaseModel {
  public abstract comment_id?: string;
  public abstract user_ids: string[];
  public abstract mentions: string[];
  public abstract user_id: string;
  public abstract author_id: string;
  public abstract report_id: string;
  public abstract text: string;
  public abstract marked: boolean;
  public abstract edited: boolean;
}
