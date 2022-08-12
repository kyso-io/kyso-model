import { FeedbackDto } from '../dtos/feedback.dto';
import { User } from '../models/user.model';
import { KysoEvent } from './kyso-event';

export interface KysoFeedbackCreateEvent extends KysoEvent {
  user: User;
  feedbackDto: FeedbackDto;
  serviceDeskEmail: string;
}
