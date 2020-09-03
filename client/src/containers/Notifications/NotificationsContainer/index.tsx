import React from 'react';
import { INotification } from 'common/services/notification.service';
import Notification from './Notification/notification';
import styles from './styles.module.scss';

interface Props {
  notifications: INotification[];
  closeNotification: (notificationId: string) => void;
}

const NotificationsContainer: React.FC<Props> = ({ notifications, closeNotification }): JSX.Element => {
  return (
    <div className={styles.notificationContainer}>
      {notifications.map((notification) => (
        <Notification notification={notification} onClose={closeNotification} key={notification.id} />
      ))}
    </div>
  );
};
export default NotificationsContainer;
