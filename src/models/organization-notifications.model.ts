import { IsBoolean, IsEmail, IsOptional, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class OrganizationNotifications extends BaseModel implements StaticImplements<ApiMethods<OrganizationNotifications>, typeof OrganizationNotifications> {
  @IsBoolean()
  public centralized: boolean;

  @IsEmail({ each: true })
  public emails: string[];

  @IsOptional()
  @IsString()
  public slackToken: string | null;

  @IsOptional()
  @IsString()
  public slackChannel: string | null;

  @IsOptional()
  @IsString()
  public teamsIncomingWebhookUrl: string | null;

  constructor(centralized: boolean, emails: string[], slackToken: string | null, slackChannel: string | null, teamsIncomingWebhookUrl: string | null) {
    super();
    this.centralized = centralized;
    this.emails = emails;
    this.slackToken = slackToken;
    this.slackChannel = slackChannel;
    this.teamsIncomingWebhookUrl = teamsIncomingWebhookUrl;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): OrganizationNotifications {
    return new OrganizationNotifications(false, [], null, null, null);
  }

  static examples(): { [key: string]: { value: OrganizationNotifications } } {
    return {
      OrganizationNotifications: {
        value: OrganizationNotifications.createEmpty(),
      },
    };
  }
}
