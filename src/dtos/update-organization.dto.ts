import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { AllowDownload } from '../enums/allow-download.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { OrganizationOptions } from '../models/organization-options.model';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';
import { OrganizationOptionsDTO } from './organization-options.dto';

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
  @Type(() => OrganizationOptionsDTO)
  public options: OrganizationOptionsDTO;

  @IsEnum(AllowDownload)
  public allow_download: AllowDownload;

  constructor(display_name: string, location: string, link: string, bio: string, allowed_access_domains: string[], options: OrganizationOptionsDTO, allow_download: AllowDownload) {
    super();
    this.display_name = display_name;
    this.location = location;
    this.link = link;
    this.bio = bio;
    this.allowed_access_domains = allowed_access_domains;
    this.options = options;
    this.allow_download = allow_download;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateOrganizationDTO {
    return new UpdateOrganizationDTO('', '', '', '', [], OrganizationOptionsDTO.createEmpty(), AllowDownload.ALL);
  }

  static examples(): { [key: string]: { value: UpdateOrganizationDTO } } {
    return {
      UpdateOrganizationDTO: {
        value: UpdateOrganizationDTO.createEmpty(),
      },
    };
  }
}
