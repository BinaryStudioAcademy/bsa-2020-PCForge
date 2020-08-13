import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

import NavigationLogo from './NavigationIcons/NavigationLogo';
import HomeIcon from './NavigationIcons/HomeIcon';
import BuildSetupIcon from './NavigationIcons/BuildSetupIcon';
import SetupIcon from './NavigationIcons/SetupIcon';
import GameMatcherIcon from './NavigationIcons/GameMatcherIcon';
import HardwareIcon from './NavigationIcons/HardwareIcon';
import AdminToolsIcon from './NavigationIcons/AdminToolsIcon';

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
        <NavigationLogo className={styles.logo} />
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
    icon: <HomeIcon />,
    link: Routes.DEFAULT,
  },
  {
    name: 'Build Setup',
    icon: <BuildSetupIcon />,
    link: Routes.BUILDER,
  },
  {
    name: 'Setup',
    icon: <SetupIcon />,
    link: Routes.SETUPS,
  },
  {
    name: 'Game Matcher',
    icon: <GameMatcherIcon />,
    link: Routes.MATCHER,
  },
  {
    name: 'Hardware',
    icon: <HardwareIcon />,
    link: '#',
  },
  {
    name: 'Admin Tools',
    icon: <AdminToolsIcon />,
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
