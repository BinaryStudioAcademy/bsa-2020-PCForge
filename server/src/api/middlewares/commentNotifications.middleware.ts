import { CommentAttributes } from '../../data/models/comment';
import { Services } from '../services';
import { Notification } from '../services/notification.service';

export const CommentNotificationMiddleware = ({ NotificationService, SetupService }: Services) => async (
  comment: CommentAttributes
): Promise<void> => {
  switch (comment.commentableType) {
    case 'setup': {
      const targetSetup = await SetupService.getSetupById(comment.commentableId.toString());
      const targetUserId = targetSetup.authorId;
      return NotificationService.notifyUserById(targetUserId, new Notification('You have new comment on your setup'));
    }
    default:
      return;
  }
};
