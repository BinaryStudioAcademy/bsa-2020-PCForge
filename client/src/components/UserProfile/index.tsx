import React from 'react';
import styles from './styles.module.scss';
import { RootState } from 'redux/rootReducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Routes } from '../../common/enums/routes';
import { IAuthState } from '../../containers/Auth/interfaces';

interface Props {
  imageSrc: string;
  state: IAuthState;
}

const UserProfile: React.FC<Props> = (props) => {
  const { imageSrc, state } = props;
  const userId = state.user?.id.toString() || '';
  return (
    <Link key="user-link" to={Routes.USER.replace(':id', userId)} className={styles.userProfileWrapper}>
      <img className={styles.image} src={imageSrc} alt="user" />
    </Link>
  );
};

const mapStateToProps = (state: RootState) => ({
  state: state.auth,
});

export default connect(mapStateToProps)(UserProfile);
