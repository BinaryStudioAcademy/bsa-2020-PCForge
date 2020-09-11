import React, { useState } from 'react';
import styles from './styles.module.scss';
import { RootState } from 'redux/rootReducer';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Routes } from 'common/enums/routes';
import { IAuthState } from 'containers/Auth/interfaces';

interface Props {
  state: IAuthState;
  userImage: string | undefined;
}

const UserProfile: React.FC<Props> = (props) => {
  const [avatarLoadError, setAvatarLoadError] = useState(false);
  const { state } = props;
  const userId = state.user?.id?.toString() || '';
  const defaultAvatar =
    'data:image/png;base64,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';
  const userAvatar = props.userImage || defaultAvatar;
  const profileRoute = Routes.USER.replace(':id', userId);

  const errorHandler = () => {
    setAvatarLoadError(true);
  };

  return (
    <NavLink to={profileRoute} className={styles.userProfileWrapper}>
      <img
        className={styles.image}
        src={avatarLoadError ? defaultAvatar : userAvatar}
        alt="user profile"
        onError={errorHandler}
      />
    </NavLink>
  );
};

const mapStateToProps = (state: RootState) => ({
  state: state.auth,
  userImage: state.user.loadedUser?.avatar,
});

export default connect(mapStateToProps)(UserProfile);
