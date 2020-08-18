import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import SvgIcon from '@material-ui/core/SvgIcon';

import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import { ReactComponent as NavigationLogo } from 'assets/icons/navigationLogo.svg';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import { ReactComponent as BuildSetupIcon } from 'assets/icons/builderSetup.svg';
import { ReactComponent as SetupIcon } from 'assets/icons/setup.svg';
import { ReactComponent as GameMatcherIcon } from 'assets/icons/gameMatcher.svg';
import { ReactComponent as HardwareIcon } from 'assets/icons/hardware.svg';
import { ReactComponent as LogOutIcon } from 'assets/icons/logOut.svg';

import { Routes } from 'common/enums';

import styles from './styles.module.scss';

interface IListNavigatinBar {
  name: string;
  icon: ReactElement;
  link: string;
}

const NavigationBarRender: React.FC<Array<IListNavigatinBar>> = (props, defaultSelected: number) => {
  const [selected, setSelected] = React.useState<number>(defaultSelected ? defaultSelected : 0);

  return (
    <Drawer variant="permanent" anchor="left" className={styles.navigationBar}>
      <List className={styles.listIcons}>
        <SvgIcon component={NavigationLogo} viewBox="0 0 63 63" className={styles.logo} />
        {props.map((item, key) => (
          <Link key={`${key}-link`} to={item.link}>
            <Tooltip title={item.name} key={`${key}-tooltip`} placement="right-start">
              <ListItem
                button
                key={key}
                className={`${styles.listItem} ${selected === key ? styles.selectedButon : ''}`}
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

const listHeader: Array<IListNavigatinBar> = [
  {
    name: 'Home',
    icon: <SvgIcon component={HomeIcon} viewBox="0 0 31 31" />,
    link: Routes.DEFAULT,
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
    name: 'Hardware',
    icon: <SvgIcon component={HardwareIcon} viewBox="0 0 31 31" />,
    link: '#',
  },
  {
    name: 'Admin Tools',
    icon: <BuildOutlinedIcon style={{ color: 'white' }} />,
    link: '#',
  },
  {
    name: 'Log out',
    icon: <SvgIcon component={LogOutIcon} viewBox="0 0 31 31" />,
    link: '#',
  },
];

interface selectedMenuProps {
  selectedMenuItemNumber: number;
}

const NavigationBar: React.FC<selectedMenuProps> = ({ selectedMenuItemNumber }) => {
  const selectedMenuItem = selectedMenuItemNumber < listHeader.length ? selectedMenuItemNumber : 0;
  return NavigationBarRender(listHeader, selectedMenuItem);
};
export default NavigationBar;
// example of using: <NavigationBar selectedMenuItem={0} />
// where selectedMenuItem is index of menu item
// 5 item of menu should be visible only for admin
