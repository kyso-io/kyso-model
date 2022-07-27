import { Discussion } from '../models/discussion.model';
import { Report } from '../models/report.model';
import { Tag } from '../models/tag.model';
import { User } from '../models/user.model';

export interface KysoTagsEvent {
  user: User;
  tag: Tag;
  discussion?: Discussion;
  report?: Report;
  frontendUrl: string;
}
