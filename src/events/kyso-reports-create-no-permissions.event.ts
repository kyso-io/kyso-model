import { KysoConfigFile } from '../models/kyso-config-file.model';
import { User } from '../models/user.model';

export interface KysoReportsCreateNoPermissions {
  user: User;
  kysoConfigFile: KysoConfigFile;
}
