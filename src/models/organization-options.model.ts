import { IsOptional } from 'class-validator';
import { OrganizationAuthOptions } from './organization-auth-options.model';
import { OrganizationNotifications } from './organization-notifications.model';

export class OrganizationOptions {
  @IsOptional()
  // @ValidateNested()
  // @Type(() => OrganizationAuthOptions)
  public auth?: OrganizationAuthOptions;

  @IsOptional()
  // @ValidateNested()
  // @Type(() => OrganizationAuthOptions)
  public notifications?: OrganizationNotifications;

  constructor() {
    this.auth = new OrganizationAuthOptions();
    this.notifications = new OrganizationNotifications();
  }
}
