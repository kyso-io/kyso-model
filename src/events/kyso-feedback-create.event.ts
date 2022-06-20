import { FeedbackDto } from '../dtos/feedback.dto';
import { User } from '../models/user.model';

export interface KysoFeedbackCreateEvent {
  user: User;
  feedbackDto: FeedbackDto;
  serviceDeskEmail: string;
}
