import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';
import { BaseDto } from './base.dto';

export class OrganizationNotificationsDTO extends BaseDto {
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

  static createEmpty(): OrganizationNotificationsDTO {
    return new OrganizationNotificationsDTO(false, [], null, null, null);
  }

  static examples(): { [key: string]: { value: OrganizationNotificationsDTO } } {
    return {
      OrganizationNotifications: {
        value: OrganizationNotificationsDTO.createEmpty(),
      },
    };
  }
}
