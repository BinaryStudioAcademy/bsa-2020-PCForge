import React, { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';
import Search from '../../components/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import UserProfile from 'components/UserProfiile';
import Breadcrumbs from 'components/Breadcrumbs';
import Title from 'components/Title';

const userPlaceholderImage =
  'https://s3-alpha-sig.figma.com/img/598d/2199/8470bc0e3df5d13c40a8cbd341b355aa?Expires=1598227200&Signature=Vz27CjpMdQV6uAtmGqVztGk8xpMS3SwwBaLPoxqtUspAk6n~Z2idSQ0MJIX8T-uX9w84HO7P5LtzSj~GxvJ1gZRTGFSqNCZK10dKif0IsA0A2eY4xDF58NbTaQC8o0eoDR5DSwCQwvtD6DO51eet0VJ81cPUAoRWNYJLaQill1URgiCAsoFjBEWwoYawE4gAIZesVCbXwQUHqhXwugoKcCQXwSbURW7QHEOOtpzp6cn7GWjnL9MgI0mVUn~70nyCAaGCk~rpZAcIxjAzCGCrYjLSQy7pfauNYQ~FwY6k1Dgs~s4K9OygaODRskfJyOzCSSNpzr081xLwFHPFWUyvjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

const TopBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const breadcrumbs = [
    { name: 'First Section', href: '/' },
    { name: 'Second Section', href: '/' },
    { name: 'Third Section', href: '/' },
  ];
  return (
    <div className={styles.topBarRoot}>
      <div className={styles.leftTopBar}>
        <div className={styles.titleWrapper}>
          <Title title="Page Title" />
        </div>
        <Breadcrumbs links={breadcrumbs} onClick={console.log} />
      </div>
      <div className={styles.rightTopBar}>
        <Search value="" onChange={onInputChange} />
        <div className={styles.settingIconWrapper}>
          <SettingsIcon />
        </div>
        <UserProfile imageSrc={userPlaceholderImage} />
      </div>
    </div>
  );
};

export default TopBar;
