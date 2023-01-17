import { IsOptional } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';
import { OrganizationAuthOptions } from './organization-auth-options.model';
import { OrganizationNotifications } from './organization-notifications.model';

export class OrganizationOptions extends BaseModel implements StaticImplements<ApiMethods<OrganizationOptions>, typeof OrganizationOptions> {
  @IsOptional()
  // @ValidateNested()
  // @Type(() => OrganizationAuthOptions)
  public auth?: OrganizationAuthOptions;

  @IsOptional()
  // @ValidateNested()
  // @Type(() => OrganizationAuthOptions)
  public notifications?: OrganizationNotifications;

  constructor() {
    super();
    this.auth = new OrganizationAuthOptions();
    this.notifications = new OrganizationNotifications(false, [], null, null, null);
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): OrganizationOptions {
    return new OrganizationOptions();
  }

  static examples(): { [key: string]: { value: OrganizationOptions } } {
    return {
      OrganizationOptions: {
        value: OrganizationOptions.createEmpty(),
      },
    };
  }
}
