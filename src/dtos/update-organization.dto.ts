import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { OrganizationOptions } from '../models/organization-options.model';

export class UpdateOrganizationDTO {
  @IsOptional()
  @IsString()
  public location!: string;

  @IsOptional()
  @IsString()
  public link!: string;

  @IsOptional()
  @IsString()
  public bio!: string;

  @IsOptional()
  @IsArray()
  public allowed_access_domains!: string[];

  @IsOptional()
  @ValidateNested()
  @Type(() => OrganizationOptions)
  public options!: OrganizationOptions;
}
