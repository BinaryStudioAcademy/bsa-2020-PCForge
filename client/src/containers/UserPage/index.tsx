import React, { useEffect } from 'react';
import PageComponent from 'containers/PageComponent';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import UserInfo from './components/UserInfo';
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
  setTab,
} from './logic/actions';
import Spinner from 'components/Spinner';

export enum UserPageTabs {
  Games = 0,
  Setups = 1,
}

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
    addUserGame: userGameAdd,
    loadFilteredGames,
    filteredGames,
    deleteUserGame,
    deleteUserSetup,
    loadSetups,
    setups,
    openTab,
    setTab,
  } = props;
  const gamesArray = userGames.map((game) => game.game);

  const { id } = useParams();
  const currentUserId = currentUser?.id.toString();

  useEffect(() => {
    loadUser(parseInt(id));
    loadUserGames(parseInt(id));
    loadSetups(parseInt(id));
  }, [id]);

  const renderContent = () => {
    if (showSpinner) {
      return <Spinner load />;
    } else if (loadedUser) {
      return (
        <UserInfo
          user={loadedUser}
          userGames={gamesArray}
          updateUser={userUpdate}
          setups={setups}
          isCurrentUser={id.toString() === currentUserId?.toString()}
          addUserGame={userGameAdd}
          loadFilteredGames={loadFilteredGames}
          filteredGames={filteredGames}
          deleteUserGame={deleteUserGame}
          deleteUserSetup={deleteUserSetup}
          openTab={openTab}
          setTab={setTab}
        />
      );
    } else {
      return <Spinner load />;
    }
  };

  if (userLoadFailed) {
    return <Redirect to="/404" />;
  }

  return <PageComponent>{renderContent()}</PageComponent>;
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
  setTab,
};

const connector = connect(mapState, mapDispatch);

export default connector(UserPage);
