import React from 'react';
import styles from './styles.module.scss';
import { RootState } from 'redux/rootReducer';
import { connect } from 'react-redux';

interface Props {
  imageSrc: string;
}

const UserProfile: React.FC<Props> = (props) => {
  const { imageSrc } = props;
  return (
    <a href="/user/1" className={styles.userProfileWrapper}>
      <img className={styles.image} src={imageSrc} alt="user" />
    </a>
  );
};

const mapStateToProps = (state: RootState) => ({
  state: state.auth,
});

export default connect(mapStateToProps)(UserProfile);
