import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { OrganizationOptions } from '../models/organization-options.model';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class UpdateOrganizationDTO extends BaseDto implements StaticImplements<ApiMethods<UpdateOrganizationDTO>, typeof UpdateOrganizationDTO> {
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

  @IsOptional()
  @IsArray()
  public allowed_access_domains: string[];

  @IsOptional()
  @ValidateNested()
  @Type(() => OrganizationOptions)
  public options: OrganizationOptions;

  constructor(display_name: string, location: string, link: string, bio: string, allowed_access_domains: string[], options: OrganizationOptions) {
    super();
    this.display_name = display_name;
    this.location = location;
    this.link = link;
    this.bio = bio;
    this.allowed_access_domains = allowed_access_domains;
    this.options = options;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateOrganizationDTO {
    return new UpdateOrganizationDTO('', '', '', '', [], OrganizationOptions.createEmpty());
  }

  static examples(): { [key: string]: { value: UpdateOrganizationDTO } } {
    return {
      UpdateOrganizationDTO: {
        value: UpdateOrganizationDTO.createEmpty(),
      },
    };
  }
}
