import { DeleteAddRequestType } from '../routes/addRequest.schema';
import { Services } from '../services';
import { Notification } from '../services/NotificationService/notification';

export const DeleteAddRequestNotificationMiddleware = ({ NotificationService }: Services) => async (
  userId: string,
  type: DeleteAddRequestType
): Promise<void> => {
  switch (type) {
    case 'approve': {
      return NotificationService.notifyUserById(
        userId,
        new Notification({
          text: 'Admin has been approved your request',
          payload: {
            type: 'link',
            value: ``,
          },
        })
      );
    }
    case 'disapprove': {
      return NotificationService.notifyUserById(
        userId,
        new Notification({
          text: 'Admin has been disapproved your request',
          payload: {
            type: 'link',
            value: ``,
          },
        })
      );
    }
    default:
      return;
  }
};
