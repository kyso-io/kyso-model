import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { IsBoolean, IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';
import { BaseModel } from './base.model';

export class Comment extends BaseModel {
  @ApiModelProperty({ format: 'faker: lorem.sentance' })
  @IsNotEmpty()
  public text: string;

  @ApiModelProperty({ format: 'faker: datatype.uuid' })
  public user_id: string;

  @ApiModelProperty({ format: 'faker: lorem.sentance' })
  public username: string;

  @ApiModelProperty({ format: 'faker: datatype.uuid' })
  @IsMongoId()
  public report_id: string;

  @ApiModelProperty({ format: 'faker: datatype.uuid' })
  @IsOptional()
  @IsMongoId()
  public comment_id: string;

  @ApiModelProperty({ format: 'faker: datatype.boolean' })
  @IsBoolean()
  public marked: boolean;

  @ApiModelProperty({ format: 'faker: datatype.uuid' })
  @IsOptional()
  @IsMongoId()
  public marked_by?: string;

  @ApiModelProperty({ format: 'faker: datatype.boolean' })
  @IsBoolean()
  public edited: boolean;

  @ApiModelProperty({ format: 'faker: datatype.uuid' })
  @IsOptional()
  @IsMongoId()
  public discussion_id?: string;

  constructor(text: string, user_id: string, report_id: string, comment_id: string, username: string) {
    super();
    this.text = text;
    this.user_id = user_id;
    this.report_id = report_id;
    this.comment_id = comment_id;
    this.username = username;
    this.marked = false;
    this.edited = false;
  }
}
