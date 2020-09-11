import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/rootReducer';

import React, { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';
import Search from 'components/Search';
import UserProfile from 'components/UserProfile';
import { Badge, IconButton, Menu, MenuProps, SvgIcon } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { withStyles } from '@material-ui/styles';
import TopBarNotification from './TopBarNotification/topBarNotification';
import { INotification } from 'common/services/NotificationService/notification';
import { getSearchResults } from './actions';
import { ReactComponent as SetupIcon } from 'assets/icons/setup.svg';
import { ReactComponent as HardwareIcon } from 'assets/icons/hardware.svg';
import { ReactComponent as NewsIcon } from 'assets/icons/news.svg';
import { ReactComponent as GameIcon } from 'assets/icons/games.svg';
import { Routes } from 'common/enums/routes';
import { Link } from 'react-router-dom';
import history from 'browserHistory';
import Button from 'components/BasicComponents/Button';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    textAlign: 'center',
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

interface IItem {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  srcPageGenerator: (id?: string) => string;
}
const Icons: { [key: string]: IItem } = {
  setups: { icon: SetupIcon, srcPageGenerator: (id) => `/setup/${id}` },
  rams: { icon: HardwareIcon, srcPageGenerator: (id) => `${Routes.HARDWARES}` },
  cpus: { icon: HardwareIcon, srcPageGenerator: (id) => `${Routes.HARDWARES}` },
  gpus: { icon: HardwareIcon, srcPageGenerator: (id) => `${Routes.HARDWARES}` },
  motherboards: { icon: HardwareIcon, srcPageGenerator: (id) => `${Routes.HARDWARES}` },
  powersupplies: { icon: HardwareIcon, srcPageGenerator: (id) => `${Routes.HARDWARES}` },
  hdds: { icon: HardwareIcon, srcPageGenerator: (id) => `${Routes.HARDWARES}` },
  ssds: { icon: HardwareIcon, srcPageGenerator: (id) => `${Routes.HARDWARES}` },
  games: { icon: GameIcon, srcPageGenerator: (id) => `/game/${id}` },
  news: { icon: NewsIcon, srcPageGenerator: (id) => `${Routes.NEWS}` },
};

const TopBar: React.FC<Props> = ({ notifications, WebSocketService, user, getSearchResults, searchResults }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const ITEM_HEIGHT = 64;
  const unreadNotificationCount = notifications.filter((notification) => notification.readAt === null).length;
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    getSearchResults(e.target.value);
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const selectHandler = () => {
    setIsActive(true);
  };

  const onRead = (notification: INotification) => {
    if (!user?.id) return;
    WebSocketService?.readNotification(user.id.toString(), notification);
  };

  const onNotificationClick = (notification: INotification) => {
    if (!user?.id) return;
    WebSocketService?.readNotification(user.id.toString(), notification);
    if (notification.payload?.type === 'link') {
      history.push(notification.payload.value);
      onClose();
    }
  };

  const onClearNotifications = (notifications: INotification[]) => {
    setAnchorEl(null);
    if (user)
      notifications.map((notification) => WebSocketService?.deleteNotification(user.id.toString(), notification));
  };

  return (
    <div className={styles.topBarRoot}>
      <div className={styles.rightTopBar}>
        <div className={styles.searchBlock}>
          <Search value={searchValue} onChange={onInputChange} onSelect={selectHandler} />
          {searchResults.length && isActive ? (
            <div className={styles.searchResults}>
              {searchResults.map((item, index) => {
                return (
                  <Link
                    key={`link-${index}`}
                    className={styles.searchLink}
                    to={Icons[item._index].srcPageGenerator(item._source.id)}
                  >
                    <p className={styles.searchResultsItem}>
                      <SvgIcon
                        className={styles.searchResultsItemImage}
                        component={Icons[item._index].icon}
                        viewBox="0 0 31 31"
                      />
                      {item._source.name ? item._source.name : item._source.title}
                    </p>
                  </Link>
                );
              })}
            </div>
          ) : (
            ''
          )}
        </div>
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
            {notifications.length > 0 ? (
              <div>
                {notifications.map((notification) => (
                  <TopBarNotification
                    key={notification.id}
                    notification={notification}
                    onClick={onNotificationClick}
                    onRead={onRead}
                  />
                ))}
                <Button
                  onClick={() => {
                    onClearNotifications(notifications);
                  }}
                  variant={'text'}
                >
                  Clear all
                </Button>
              </div>
            ) : (
              <span className={styles.notificationWrapper}>You don't have any notifications</span>
            )}
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
  searchResults: state.searchEngine.results,
});

const mapDispatch = { getSearchResults };

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(TopBar);
