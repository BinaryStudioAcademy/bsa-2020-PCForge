/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { connect, ConnectedProps } from 'react-redux';
import {
  setNotifications,
  addNotification,
  deleteNotification,
  closeNotification,
  setNotificationService,
  setWebSocketService,
} from './redux/actions';
import { RootState } from 'redux/rootReducer';
import { NotificationService } from 'common/services/notification.service';

import React from 'react';
import NotificationsContainer from './NotificationsContainer';
import { WebSocketService } from 'common/services/webscocket.service';

const InjectNotifications: React.FC<Props> = ({
  children,
  userId,
  activeNotifications,
  setNotificationService,
  setWebSocketService,
  ...notificationActions
}): JSX.Element => {
  React.useEffect(() => {
    if (!canOpenSocket()) return;
    const ws = new WebSocket(process.env.REACT_APP_WS_SERVER_ADDRESS!, userId!.toString(10));
    const notificationService = new NotificationService(notificationActions);
    setNotificationService(notificationService);
    const webSocketService = new WebSocketService(ws, notificationService);
    setWebSocketService(webSocketService);
    ws.onopen = () => console.log('WebSocket opened');
    ws.onmessage = (messageEvent) => {
      const { data } = messageEvent;
      webSocketService.handleMessage(data);
    };
    ws.onclose = () => console.log('WebSocket closed');
    return () => {
      ws.close();
    };
  }, []);

  const canOpenSocket = (): boolean => {
    if (!process.env.REACT_APP_WS_SERVER_ADDRESS) {
      console.error(`Unable to connect to WebSocket, ws address is not set in .env`);
      return false;
    }
    if (!userId) {
      console.error(`Unable to open WebSocket, userId is not defined: ${userId}`);
      return false;
    }
    return true;
  };

  return (
    <>
      {children}
      <NotificationsContainer
        notifications={activeNotifications}
        closeNotification={notificationActions.closeNotification}
      />
    </>
  );
};

const mapState = (state: RootState) => ({
  userId: state.auth.user?.id,
  activeNotifications: state.notifications.activeNotifications,
});

const mapDispatch = {
  setNotifications,
  addNotification,
  deleteNotification,
  closeNotification,
  setNotificationService,
  setWebSocketService,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(InjectNotifications);
