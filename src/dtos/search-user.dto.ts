import { IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class SearchUserDto extends BaseDto implements StaticImplements<ApiMethods<SearchUserDto>, typeof SearchUserDto> {
  @IsString()
  @IsNotEmpty()
  public organization_id: string | null;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public team_id: string | null;

  @IsString()
  @IsNotEmpty()
  public query: string | null;

  public payload: any;

  constructor(organization_id: string | null, team_id: string | null, query: string | null, payload: any) {
    super();
    this.organization_id = organization_id;
    this.team_id = team_id;
    this.query = query;
    this.payload = payload;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): SearchUserDto {
    return new SearchUserDto('', '', '', {});
  }

  static examples(): { [key: string]: { value: SearchUserDto } } {
    return {
      SearchUserDto: {
        value: SearchUserDto.createEmpty(),
      },
    };
  }
}
