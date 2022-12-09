import { IsOptional, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class UpdateUserRequestDTO extends BaseDto implements StaticImplements<ApiMethods<UpdateUserRequestDTO>, typeof UpdateUserRequestDTO> {
  @IsOptional()
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public display_name: string;

  @IsOptional()
  @IsString()
  public location: string;

  @IsOptional()
  @IsString()
  public link: string;

  @IsOptional()
  @IsString()
  public bio: string;

  constructor(name: string, display_name: string, location: string, link: string, bio: string) {
    super();
    this.name = name;
    this.display_name = display_name;
    this.location = location;
    this.link = link;
    this.bio = bio;
  }
  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateUserRequestDTO {
    return new UpdateUserRequestDTO('', '', '', '', '');
  }

  static examples(): { [key: string]: { value: UpdateUserRequestDTO } } {
    return {
      UpdateUserRequestDTO: {
        value: UpdateUserRequestDTO.createEmpty(),
      },
    };
  }
}
