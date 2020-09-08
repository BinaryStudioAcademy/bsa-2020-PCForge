import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import SvgIcon from '@material-ui/core/SvgIcon';
import { clearToken, getTokenType, TokenType } from 'helpers/tokenHelper';
import { useGoogleLogout } from 'react-google-login';
import * as alert from 'common/services/AlertService/alert.service';

import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import { ReactComponent as NavigationLogo } from 'assets/icons/navigationLogo.svg';
import { ReactComponent as BuildSetupIcon } from 'assets/icons/builderSetup.svg';
import { ReactComponent as SetupIcon } from 'assets/icons/setup.svg';
import { ReactComponent as GameMatcherIcon } from 'assets/icons/gameMatcher.svg';
import { ReactComponent as HardwareIcon } from 'assets/icons/hardware.svg';
import { ReactComponent as LogOutIcon } from 'assets/icons/logOut.svg';

import history from 'browserHistory';
import { Routes } from 'common/enums';

import styles from 'components/NavigationBar/styles.module.scss';
import { logout } from 'containers/Auth/actions';

interface IListNavigationBar {
  name: string;
  icon: ReactElement;
  link: string;
  onClick?: () => void;
  className?: string;
}

const NavigationBarRender: React.FC<Array<IListNavigationBar>> = (props, defaultSelected: number | undefined) => {
  const [selected, setSelected] = React.useState<number | undefined>(defaultSelected);

  return (
    <Drawer variant="permanent" anchor="left" className={styles.navigationBar}>
      <List className={styles.listIcons}>
        {props.map((item, key) => (
          <Link key={`${key}-link`} to={item.link} onClick={item.onClick}>
            <Tooltip title={item.name} key={`${key}-tooltip`} placement="right-start">
              <ListItem
                button
                key={key}
                className={`${styles.listItem} ${selected === key ? styles.selectedButton : ''} ${
                  item.className ? item.className : ''
                }`}
                onClick={() => setSelected(key)}
              >
                <div className={styles.icon}>{item.icon}</div>
              </ListItem>
            </Tooltip>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

interface selectedMenuProps {
  selectedMenuItemNumber?: number;
  isAdmin?: boolean;
}

interface IListNavigatinBar {
  name: string;
  icon: JSX.Element;
  link: string;
  className?: string;
  onClick?: () => void;
}

const NavigationBar: React.FC<selectedMenuProps> = ({ selectedMenuItemNumber, isAdmin }) => {
  const dispatch = useDispatch();

  const clearTokenAndRedirect = async () => {
    await clearToken();
    await dispatch(logout());
    history.push(Routes.LOGIN);
  };

  const listHeader: Array<IListNavigatinBar> = [
    {
      name: 'Home',
      icon: <SvgIcon component={NavigationLogo} viewBox="0 0 63 63" className={styles.logo} />,
      link: Routes.DEFAULT,
      className: styles.homeLink,
    },
    {
      name: 'Build Setup',
      icon: <SvgIcon component={BuildSetupIcon} />,
      link: Routes.BUILDER,
    },
    {
      name: 'Setup',
      icon: <SvgIcon component={SetupIcon} viewBox="0 0 31 31" />,
      link: Routes.SETUPS,
    },
    {
      name: 'Game Matcher',
      icon: <SvgIcon component={GameMatcherIcon} />,
      link: Routes.MATCHER,
    },
    {
      name: 'Hardwares',
      icon: <SvgIcon component={HardwareIcon} viewBox="0 0 31 31" />,
      link: Routes.HARDWARES,
    },
  ];

  if (isAdmin) {
    listHeader.push({
      name: 'Admin Tools',
      icon: <BuildOutlinedIcon style={{ color: 'white' }} />,
      link: Routes.ADMINTOOLS,
    });
  }

  listHeader.push({
    name: 'Log out',
    icon: <SvgIcon component={LogOutIcon} viewBox="0 0 31 31" />,
    link: '#',
    onClick: async () => {
      switch (getTokenType()) {
        default:
          await clearTokenAndRedirect();
      }
    },
  });

  let selectedMenuItem = undefined;
  if (selectedMenuItemNumber !== undefined) {
    selectedMenuItem = selectedMenuItemNumber < listHeader.length ? selectedMenuItemNumber : 0;
  }
  return NavigationBarRender(listHeader, selectedMenuItem);
};
export default NavigationBar;
// example of using: <NavigationBar selectedMenuItem={0} />
// where selectedMenuItem is index of menu item
// 5 item of menu should be visible only for admin
