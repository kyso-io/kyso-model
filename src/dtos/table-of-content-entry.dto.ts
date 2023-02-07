import { IsNotEmpty, IsOptional } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class TableOfContentEntryDto extends BaseDto implements StaticImplements<ApiMethods<TableOfContentEntryDto>, typeof TableOfContentEntryDto> {
  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public href: string;

  @IsOptional()
  public children?: TableOfContentEntryDto[];

  constructor(title: string, href: string, children?: TableOfContentEntryDto[]) {
    super();
    this.title = title;
    this.href = href;
    if (children) {
      this.children = children;
    }
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): TableOfContentEntryDto {
    return new TableOfContentEntryDto('', '');
  }

  static examples(): { [key: string]: { value: TableOfContentEntryDto } } {
    return {
      TableOfContentEntryDto: {
        value: TableOfContentEntryDto.createEmpty(),
      },
    };
  }
}
