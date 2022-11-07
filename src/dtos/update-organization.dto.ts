import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { OrganizationOptions } from '../models/organization-options.model';
import { StaticImplements } from '../types/static-implements';

export class UpdateOrganizationDTO extends BaseModel implements StaticImplements<ApiMethods<UpdateOrganizationDTO>, typeof UpdateOrganizationDTO> {
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

  constructor(location: string, link: string, bio: string, allowed_access_domains: string[], options: OrganizationOptions) {
    super();
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
    return new UpdateOrganizationDTO('', '', '', [], OrganizationOptions.createEmpty());
  }

  static examples(): { [key: string]: { value: UpdateOrganizationDTO } } {
    return {
      UpdateOrganizationDTO: {
        value: UpdateOrganizationDTO.createEmpty(),
      },
    };
  }
}
