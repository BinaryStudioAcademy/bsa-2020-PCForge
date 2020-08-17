import React from 'react';
import styles from './styles.module.scss';

interface Props {
  imageSrc: string;
}

const UserProfile: React.FC<Props> = (props) => {
  const { imageSrc } = props;
  return (
    <div className={styles.userProfileWrapper}>
      <img className={styles.image} src={imageSrc} alt="user" />
    </div>
  );
};

export default UserProfile;
