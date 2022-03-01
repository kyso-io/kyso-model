import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { OrganizationAuthOptions } from './organization-auth-options.model';

export class OrganizationOptions {
  @IsOptional()
  // @ValidateNested()
  // @Type(() => OrganizationAuthOptions)
  public auth?: OrganizationAuthOptions;

  constructor() {}
}
