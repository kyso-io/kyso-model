import { IsEnum, ValidateNested } from '@nestjs/class-validator';
import { Type } from 'class-transformer';
import { UserNotificationsSettingsScope } from '../enums/user-notifications-settings-scope.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { NotificationsSettings } from '../models/notifications-settings.model';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class UpdateUserNotificationsSettings extends BaseDto implements StaticImplements<ApiMethods<UpdateUserNotificationsSettings>, typeof UpdateUserNotificationsSettings> {
  @IsEnum(UserNotificationsSettingsScope)
  public scope: UserNotificationsSettingsScope;

  @ValidateNested()
  @Type(() => NotificationsSettings)
  public settings: NotificationsSettings;

  constructor(scope: UserNotificationsSettingsScope, settings: NotificationsSettings) {
    super();
    this.scope = scope;
    this.settings = settings;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateUserNotificationsSettings {
    return new UpdateUserNotificationsSettings(UserNotificationsSettingsScope.Global, new NotificationsSettings());
  }

  static examples(): { [key: string]: { value: UpdateUserNotificationsSettings } } {
    return {
      UserDTO: {
        value: UpdateUserNotificationsSettings.createEmpty(),
      },
    };
  }
}
