import React from 'react';
import { createStyles, ListItemIcon, ListItemText, makeStyles, Menu, MenuProps, Theme } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { INotification, NotificationType } from 'common/services/notification.service';
import InfoIcon from '@material-ui/icons/Info';
import ErrorIcon from '@material-ui/icons/Error';
import CheckIcon from '@material-ui/icons/Check';
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      minWidth: 0,
      marginRight: 10,
    },
  })
);

interface Props {
  notification: INotification;
  onDelete: (id: string) => void;
}

const TopBarNotification: React.FC<Props> = ({ notification, onDelete }) => {
  const materialStyles = useStyles();

  const onCLick = () => {
    onDelete(notification.id);
  };

  const getIcon = (notification: INotification) => {
    switch (notification.type) {
      case NotificationType.INFO:
        return <InfoIcon fontSize="small" />;
      case NotificationType.ERROR:
        return <ErrorIcon fontSize="small" />;
      case NotificationType.SUCCESS:
        return <CheckIcon fontSize="small" />;
      case NotificationType.WARNING:
        return <WarningIcon fontSize="small" />;
    }
  };

  return (
    <MenuItem onClick={onCLick}>
      <ListItemIcon classes={{ root: materialStyles.icon }}>{getIcon(notification)}</ListItemIcon>
      <ListItemText primary={notification.text} />
    </MenuItem>
  );
};

export default TopBarNotification;
