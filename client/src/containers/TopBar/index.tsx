import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/rootReducer';

import React, { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';
import Search from 'components/Search';
import UserProfile from 'components/UserProfile';
import { IconButton, Menu } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuItem from '@material-ui/core/MenuItem';

const TopBar: React.FC<Props> = ({ notifications }) => {
  const [searchValue, setSearchValue] = useState('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.topBarRoot}>
      <div className={styles.rightTopBar}>
        <Search value="" onChange={onInputChange} />
        <div className={styles.settingIconWrapper}>
          <IconButton size="small" onClick={handleClick}>
            <NotificationsIcon />
          </IconButton>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            {notifications.map((notification) => (
              <MenuItem key={notification.id} onClick={handleClose}>
                {notification.text}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <UserProfile />
      </div>
    </div>
  );
};

const mapState = (state: RootState) => ({
  notifications: state.notifications.notifications,
});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(TopBar);
