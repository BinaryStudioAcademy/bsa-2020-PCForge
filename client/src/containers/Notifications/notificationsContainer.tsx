import React from 'react';

interface Props {
  userId: string;
  // notifications: INotification[];
}

const NotificationsContainer: React.FC<Props> = ({ children, userId }): JSX.Element => {
  return <>notifications.map...</>;
};
export default NotificationsContainer;
