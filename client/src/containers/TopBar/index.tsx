import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { deleteNotification } from 'containers/Notifications/redux/actions';

import React, { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';
import Search from 'components/Search';
import UserProfile from 'components/UserProfile';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuProps } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuItem from '@material-ui/core/MenuItem';
import { INotification, NotificationType } from 'containers/Notifications/interfaces';
import InfoIcon from '@material-ui/icons/Info';
import ErrorIcon from '@material-ui/icons/Error';
import CheckIcon from '@material-ui/icons/Check';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/styles';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const TopBar: React.FC<Props> = ({ notifications, deleteNotification }) => {
  const [searchValue, setSearchValue] = useState('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const ITEM_HEIGHT = 64;
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (notification: INotification) => {
    setAnchorEl(null);
  };

  const handleDelete = (notification: INotification) => {
    deleteNotification(notification.id);
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

  const getNotifications = () => {
    if (notifications.length > 0) return notifications;
    else return [{ id: 'notification-id', text: 'no notifications', type: NotificationType.INFO }];
  };

  return (
    <div className={styles.topBarRoot}>
      <div className={styles.rightTopBar}>
        <Search value="" onChange={onInputChange} />
        <div className={styles.settingIconWrapper}>
          <IconButton size="small" onClick={handleClick}>
            <NotificationsIcon />
          </IconButton>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '30ch',
              },
            }}
          >
            {getNotifications().map((notification) => (
              <MenuItem key={notification.id} onClick={() => handleDelete(notification)}>
                <ListItemIcon>{getIcon(notification)}</ListItemIcon>
                <ListItemText primary={notification.text} />
              </MenuItem>
            ))}
          </StyledMenu>
        </div>
        <UserProfile />
      </div>
    </div>
  );
};

const mapState = (state: RootState) => ({
  notifications: state.notifications.notifications,
});

const mapDispatch = {
  deleteNotification,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(TopBar);
