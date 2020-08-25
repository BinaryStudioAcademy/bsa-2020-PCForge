import React, { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';
import Search from 'components/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import UserProfile from 'components/UserProfile';

const TopBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.topBarRoot}>
      <div className={styles.rightTopBar}>
        <Search value="" onChange={onInputChange} />
        <div className={styles.settingIconWrapper}>
          <SettingsIcon />
        </div>
        <UserProfile />
      </div>
    </div>
  );
};

export default TopBar;
