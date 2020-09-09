import { DeleteAddRequestType } from '../routes/addRequest.schema';
import { Services } from '../services';
import { Notification } from '../services/NotificationService/notification';
import { UserModel } from '../../data/models/user';

export const UserRequestNotificationMiddleware = ({ NotificationService }: Services) => async (
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

export const UserRequestAdminNotificationMiddleware = ({ NotificationService }: Services) => async (
  admins: UserModel[]
): Promise<void> => {
  if (admins.length > 0) {
    admins.forEach((admin: UserModel) =>
      NotificationService.notifyUserById(admin.id, new Notification({ text: 'New user request is added' }))
    );
  }
};
