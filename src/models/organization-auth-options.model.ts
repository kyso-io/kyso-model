import { IsArray, IsBoolean, IsOptional } from 'class-validator';
import { AuthProviderSpec } from './auth-provider-spec.model';

export class OrganizationAuthOptions {
  @IsBoolean()
  @IsOptional()
  public allow_login_with_kyso?: boolean;

  @IsBoolean()
  @IsOptional()
  public allow_login_with_google?: boolean;

  @IsBoolean()
  @IsOptional()
  public allow_login_with_github?: boolean;
  
  @IsArray()
  @IsOptional()
  public otherProviders?: AuthProviderSpec[];
  
  constructor() { }
}
