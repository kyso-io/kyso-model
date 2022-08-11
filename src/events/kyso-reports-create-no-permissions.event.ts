import { KysoConfigFile } from '../models/kyso-config-file.model';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoReportsCreateNoPermissions extends KysoEvent {
  user: User;
  kysoConfigFile: KysoConfigFile;
}
