import React, { useEffect } from 'react';
import PageComponent from 'containers/PageComponent';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import { Box } from '@material-ui/core';
import UserInfo from 'containers/UserPage/components/UserInfo';
import { RootState } from 'redux/rootReducer';
import {
  loadUser,
  updateUser,
  loadUserGames,
  loadFilteredGames,
  addUserGame,
  deleteUserGame,
  loadSetups,
  deleteUserSetup,
  editUserSetup,
  setTab,
} from 'containers/UserPage/logic/actions';
import Spinner from 'components/Spinner';
import styles from 'containers/UserPage/styles.module.scss';
import PreferencesSection from './components/PreferencesSection';

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const UserPage = (props: Props) => {
  const {
    loadedUser,
    loadUserGames,
    showSpinner,
    loadUser,
    currentUser,
    userLoadFailed,
    updateUser: userUpdate,
    userGames,
    addUserGame,
    loadFilteredGames,
    filteredGames,
    deleteUserGame,
    deleteUserSetup,
    editUserSetup,
    loadSetups,
    setups,
    openTab,
    setTab,
  } = props;
  const gamesArray = userGames.map((game) => game.game);

  const { id } = useParams<{ id: string }>();
  const currentUserId = currentUser?.id?.toString();

  useEffect(() => {
    loadUser(parseInt(id));
    loadUserGames(parseInt(id));
    loadSetups(parseInt(id));
  }, [id]);

  const renderContent = (): JSX.Element => (
    <>
      {showSpinner ? (
        <Box className={styles.spinnerWrapper}>
          <Spinner load />
        </Box>
      ) : loadedUser ? (
        <Box className={styles.userPageContainer}>
          <UserInfo
            user={loadedUser}
            updateUser={userUpdate}
            isCurrentUser={id.toString() === currentUserId?.toString()}
          />
          <PreferencesSection
            openTab={openTab}
            setTab={setTab}
            isCurrentUser={id.toString() === currentUserId?.toString()}
            userGames={gamesArray}
            addUserGame={addUserGame}
            deleteUserGame={deleteUserGame}
            filteredGames={filteredGames}
            loadFilteredGames={loadFilteredGames}
            setups={setups}
            deleteUserSetup={deleteUserSetup}
            editUserSetup={editUserSetup}
          />
        </Box>
      ) : (
        <Spinner />
      )}
    </>
  );

  if (userLoadFailed) {
    return <Redirect to="/404" />;
  }

  return <PageComponent titleSelector="UserProfile">{renderContent()}</PageComponent>;
};

const mapState = (state: RootState) => ({
  loadedUser: state.user.loadedUser,
  showSpinner: state.user.showSpinner,
  setups: state.user.setups,
  currentUser: state.auth.user,
  userGames: state.user.userGames,
  filteredGames: state.user.filteredGames,
  openTab: state.user.openTab,
  userLoadFailed: state.user.userLoadFailed,
});

const mapDispatch = {
  loadUser,
  updateUser,
  loadUserGames,
  loadFilteredGames,
  addUserGame,
  deleteUserGame,
  loadSetups,
  deleteUserSetup,
  editUserSetup,
  setTab,
};

const connector = connect(mapState, mapDispatch);

export default connector(UserPage);
