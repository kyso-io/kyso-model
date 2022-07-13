import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsOptional, ValidateNested } from 'class-validator';
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
  
  @IsBoolean()
  @IsOptional()
  public allow_login_with_bitbucket?: boolean;
  
  @IsBoolean()
  @IsOptional()
  public allow_login_with_gitlab?: boolean;

  @IsArray()
  @IsOptional()
  // @ValidateNested({ each: true })
  // @Type(() => AuthProviderSpec)
  public otherProviders?: AuthProviderSpec[];

  constructor() {
    this.allow_login_with_kyso = true;
    this.allow_login_with_google = true;
    this.allow_login_with_github = true;
    this.allow_login_with_bitbucket = true;
    this.allow_login_with_gitlab = true;
    this.otherProviders = [];
  }
}
