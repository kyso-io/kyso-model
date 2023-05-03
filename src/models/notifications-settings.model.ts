import { IsBoolean } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';

export class NotificationsSettings implements StaticImplements<ApiMethods<NotificationsSettings>, typeof NotificationsSettings> {
  // Organization
  @IsBoolean()
  public new_member_organization: boolean;

  @IsBoolean()
  public removed_member_in_organization: boolean;

  @IsBoolean()
  public updated_role_in_organization: boolean;

  @IsBoolean()
  public organization_removed: boolean;

  // Channel
  @IsBoolean()
  public new_channel: boolean;

  @IsBoolean()
  public new_member_channel: boolean;

  @IsBoolean()
  public removed_member_in_channel: boolean;

  @IsBoolean()
  public updated_role_in_channel: boolean;

  @IsBoolean()
  public channel_removed: boolean;

  // Report
  @IsBoolean()
  public new_report: boolean;

  @IsBoolean()
  public new_report_version: boolean;

  @IsBoolean()
  public report_removed: boolean;

  @IsBoolean()
  public new_comment_in_report: boolean;

  @IsBoolean()
  public replay_comment_in_report: boolean;

  @IsBoolean()
  public new_mention_in_report: boolean;

  @IsBoolean()
  public report_comment_removed: boolean;

  constructor() {
    // Organization
    this.new_member_organization = true;
    this.removed_member_in_organization = true;
    this.updated_role_in_organization = true;
    this.organization_removed = true;
    // Channel
    this.new_channel = true;
    this.new_member_channel = true;
    this.removed_member_in_channel = true;
    this.updated_role_in_channel = true;
    this.channel_removed = true;
    // Report
    this.new_report = true;
    this.new_report_version = true;
    this.report_removed = true;
    this.new_comment_in_report = true;
    this.replay_comment_in_report = true;
    this.new_mention_in_report = true;
    this.report_comment_removed = true;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): NotificationsSettings {
    return new NotificationsSettings();
  }

  static examples(): { [key: string]: { value: NotificationsSettings } } {
    return {
      Discussion: {
        value: NotificationsSettings.createEmpty(),
      },
    };
  }
}
