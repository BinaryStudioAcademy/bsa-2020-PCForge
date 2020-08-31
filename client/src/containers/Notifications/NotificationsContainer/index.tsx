import React from 'react';
import { INotification } from '../interfaces';
import Notification from './Notification/notification';
import styles from './styles.module.scss';

interface Props {
  notifications: INotification[];
}

const NotificationsContainer: React.FC<Props> = ({ notifications }): JSX.Element => {
  return (
    <div className={styles.notificationContainer}>
      {notifications.map((notification) => (
        <Notification notification={notification} key={notification.id} />
      ))}
    </div>
  );
};
export default NotificationsContainer;
