import { IsOptional, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class UpdateUserRequestDTO extends BaseModel implements StaticImplements<ApiMethods<UpdateUserRequestDTO>, typeof UpdateUserRequestDTO> {
  @IsOptional()
  @IsString()
  public location!: string;

  @IsOptional()
  @IsString()
  public link!: string;

  @IsOptional()
  @IsString()
  public bio!: string;

  constructor(location: string, link: string, bio: string) {
    super();
    this.location = location;
    this.link = link;
    this.bio = bio;
  }
  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateUserRequestDTO {
    return new UpdateUserRequestDTO('', '', '');
  }

  static examples(): { [key: string]: { value: UpdateUserRequestDTO } } {
    return {
      UpdateUserRequestDTO: {
        value: UpdateUserRequestDTO.createEmpty(),
      },
    };
  }
}
