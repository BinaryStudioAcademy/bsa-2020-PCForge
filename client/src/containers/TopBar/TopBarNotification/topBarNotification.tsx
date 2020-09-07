import React from 'react';
import { createStyles, ListItemIcon, makeStyles, Theme } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { INotification, NotificationType } from 'common/services/NotificationService/notification';
import InfoIcon from '@material-ui/icons/Info';
import ErrorIcon from '@material-ui/icons/Error';
import CheckIcon from '@material-ui/icons/Check';
import WarningIcon from '@material-ui/icons/Warning';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import styles from './styles.module.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      minWidth: 0,
      marginRight: 10,
    },
    readIcon: {
      color: '#eb3d55',
      zIndex: 10000,
    },
    menuItem: {
      '&:hover': {
        color: 'red',
      },
    },
  })
);

interface Props {
  notification: INotification;
  onRead: (notification: INotification) => void;
  onClick: (notification: INotification) => void;
}

const TopBarNotification: React.FC<Props> = ({ notification, onRead: propsOnRead, onClick: propsOnClick }) => {
  const materialStyles = useStyles();
  const isRead = notification.readAt;

  const onCLick = () => {
    propsOnClick(notification);
  };

  const onRead = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    propsOnRead(notification);
  };

  const getIcon = (notification: INotification) => {
    switch (notification.type) {
      case NotificationType.INFO:
        return <InfoIcon fontSize="large" />;
      case NotificationType.ERROR:
        return <ErrorIcon fontSize="large" />;
      case NotificationType.SUCCESS:
        return <CheckIcon fontSize="large" />;
      case NotificationType.WARNING:
        return <WarningIcon fontSize="large" />;
    }
  };

  return (
    <MenuItem onClick={onCLick} classes={{ root: materialStyles.menuItem }}>
      <ListItemIcon classes={{ root: materialStyles.icon }}>{getIcon(notification)}</ListItemIcon>
      <div className={styles.notificationText}>{notification.text}</div>
      {!isRead && (
        <Brightness1Icon
          fontSize="small"
          onClick={onRead}
          classes={{ root: materialStyles.readIcon }}
          onMouseDown={(e) => e.stopPropagation()}
        />
      )}
    </MenuItem>
  );
};

export default TopBarNotification;
