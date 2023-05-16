import { IsBoolean, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator';
import { InlineCommentStatusEnum } from '../enums/inline-comment-status.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class UpdateInlineCommentDto extends BaseDto implements StaticImplements<ApiMethods<UpdateInlineCommentDto>, typeof UpdateInlineCommentDto> {
  @IsMongoId()
  public file_id: string;

  @IsString()
  @IsNotEmpty()
  public text: string;

  @IsOptional()
  @IsMongoId({ each: true })
  public mentions: string[];

  @IsEnum(InlineCommentStatusEnum)
  public status: InlineCommentStatusEnum;

  @IsBoolean()
  @IsNotEmpty()
  public orphan: boolean;

  constructor(file_id: string, text: string, mentions: string[], status: InlineCommentStatusEnum, orphan?: boolean) {
    super();
    this.file_id = file_id;
    this.text = text;
    this.mentions = mentions;
    this.status = status;

    if (orphan) {
      this.orphan = orphan;
    } else {
      this.orphan = false;
    }
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateInlineCommentDto {
    return new UpdateInlineCommentDto('', '', [], InlineCommentStatusEnum.OPEN);
  }

  static examples(): { [key: string]: { value: UpdateInlineCommentDto } } {
    return {
      UpdateInlineCommentDto: {
        value: UpdateInlineCommentDto.createEmpty(),
      },
    };
  }
}
