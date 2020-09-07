import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/rootReducer';

import React, { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';
import Search from 'components/Search';
import UserProfile from 'components/UserProfile';
import { Badge, IconButton, Menu, MenuProps } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { withStyles } from '@material-ui/styles';
import TopBarNotification from './TopBarNotification/topBarNotification';
import { INotification } from 'common/services/NotificationService/notification';
import { useHistory } from 'react-router-dom';

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

const TopBar: React.FC<Props> = ({ notifications, WebSocketService, user }) => {
  const [searchValue, setSearchValue] = useState('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const history = useHistory();
  const ITEM_HEIGHT = 64;
  const unreadNotificationCount = notifications.filter((notification) => notification.readAt === null).length;
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const onRead = (notification: INotification) => {
    if (!user?.id) return;
    WebSocketService?.readNotification(user.id.toString(), notification);
  };

  const onNotificationClick = (notification: INotification) => {
    if (!user?.id) return;
    console.log(notification);
    WebSocketService?.readNotification(user.id.toString(), notification);
    if (notification.payload?.type === 'link') {
      history.push(notification.payload.value);
      onClose();
    }
  };

  return (
    <div className={styles.topBarRoot}>
      <div className={styles.rightTopBar}>
        <Search value="" onChange={onInputChange} />
        <div className={styles.settingIconWrapper}>
          <Badge badgeContent={unreadNotificationCount} color="primary">
            <IconButton size="small" edge="start" onClick={onClick}>
              <NotificationsIcon />
            </IconButton>
          </Badge>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 12.5,
                width: '50ch',
              },
            }}
          >
            {notifications.length > 0
              ? notifications.map((notification) => (
                  <TopBarNotification
                    key={notification.id}
                    notification={notification}
                    onClick={onNotificationClick}
                    onRead={onRead}
                  />
                ))
              : "You don't have any notifications"}
          </StyledMenu>
        </div>
        <UserProfile />
      </div>
    </div>
  );
};

const mapState = (state: RootState) => ({
  notifications: state.notifications.notifications,
  WebSocketService: state.notifications.WebSocketService,
  user: state.auth.user,
});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(TopBar);
