import { IsOptional } from 'class-validator';
import { OrganizationAuthOptions } from './organization-auth-options.model';

export class OrganizationOptions {
  @IsOptional()
  public auth?: OrganizationAuthOptions;
  
  constructor() { }
}
