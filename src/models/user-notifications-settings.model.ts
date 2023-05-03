import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';
import { NotificationsSettings } from './notifications-settings.model';

export class UserNotificationsSettings extends BaseModel implements StaticImplements<ApiMethods<UserNotificationsSettings>, typeof UserNotificationsSettings> {
  public user_id: string;
  public global_settings: NotificationsSettings;
  public organization_settings: { [organization_id: string]: NotificationsSettings };
  public channels_settings: {
    [organization_id: string]: {
      [channel_id: string]: NotificationsSettings;
    };
  };

  constructor(user_id: string) {
    super();
    this.user_id = user_id;
    this.global_settings = new NotificationsSettings();
    this.organization_settings = {};
    this.channels_settings = {};
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UserNotificationsSettings {
    return new UserNotificationsSettings('');
  }

  static examples(): { [key: string]: { value: UserNotificationsSettings } } {
    return {
      Discussion: {
        value: UserNotificationsSettings.createEmpty(),
      },
    };
  }
}
