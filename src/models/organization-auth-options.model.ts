import { IsArray, IsBoolean, IsOptional } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { AuthProviderSpec } from './auth-provider-spec.model';
import { BaseModel } from './base.model';

export class OrganizationAuthOptions extends BaseModel implements StaticImplements<ApiMethods<OrganizationAuthOptions>, typeof OrganizationAuthOptions> {
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
    super();
    this.allow_login_with_kyso = true;
    this.allow_login_with_google = true;
    this.allow_login_with_github = true;
    this.allow_login_with_bitbucket = true;
    this.allow_login_with_gitlab = true;
    this.otherProviders = [];
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): OrganizationAuthOptions {
    return new OrganizationAuthOptions();
  }

  static examples(): { [key: string]: { value: OrganizationAuthOptions } } {
    return {
      OrganizationAuthOptions: {
        value: OrganizationAuthOptions.createEmpty(),
      },
    };
  }
}
