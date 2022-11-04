import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class CreateOrganizationDto extends BaseModel implements StaticImplements<ApiMethods<CreateOrganizationDto>, typeof CreateOrganizationDto> {
  @IsNotEmpty()
  @IsString()
  public display_name!: string;

  @IsOptional()
  @IsString()
  public bio!: string;

  @IsOptional()
  @IsString()
  public location!: string;

  @IsOptional()
  @IsString()
  public link!: string;

  constructor(display_name: string, bio: string, location: string, link: string) {
    super();
    this.display_name = display_name;
    this.bio = bio;
    this.location = location;
    this.link = link;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): CreateOrganizationDto {
    return new CreateOrganizationDto('', '', '', '');
  }

  static examples(): { [key: string]: { value: CreateOrganizationDto } } {
    return {
      CreateOrganizationDto: {
        value: CreateOrganizationDto.createEmpty(),
      },
    };
  }
}
