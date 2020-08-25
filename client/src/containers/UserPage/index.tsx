import React, { useEffect } from 'react';
import PageComponent from 'containers/PageComponent';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import UserInfo from './components/UserInfo';
import { RootState } from 'redux/rootReducer';
import { loadUser, updateUser, loadUserGames, loadFilteredGames, addUserGame, deleteUserGame } from './logic/actions';
import Spinner from 'components/Spinner';

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const UserPage = (props: Props) => {
  const {
    loadedUser,
    loadUserGames,
    showSpinner,
    loadUser,
    currentUser,
    updateUser: userUpdate,
    userGames,
    addUserGame: userGameAdd,
    loadFilteredGames,
    filteredGames,
    deleteUserGame,
  } = props;
  const gamesArray = userGames.map((game) => game.game);
  console.log(gamesArray);

  const { id } = useParams();
  const currentUserId = currentUser?.id.toString();

  useEffect(() => {
    loadUser(parseInt(id));
    loadUserGames(parseInt(id));
  }, []);

  const renderContent = () => {
    if (showSpinner) {
      return <Spinner load />;
    } else if (loadedUser) {
      return (
        <UserInfo
          user={loadedUser}
          userGames={gamesArray}
          updateUser={userUpdate}
          isCurrentUser={id.toString() === currentUserId?.toString()}
          addUserGame={userGameAdd}
          loadFilteredGames={loadFilteredGames}
          filteredGames={filteredGames}
          deleteUserGame={deleteUserGame}
        />
      );
    } else {
      return <Redirect to="/404" />;
    }
  };

  return <PageComponent>{renderContent()}</PageComponent>;
};

const mapState = (state: RootState) => ({
  loadedUser: state.user.loadedUser,
  showSpinner: state.user.showSpinner,
  currentUser: state.auth.user,
  userGames: state.user.userGames,
  filteredGames: state.user.filteredGames,
});

const mapDispatch = {
  loadUser,
  updateUser,
  loadUserGames,
  loadFilteredGames,
  addUserGame,
  deleteUserGame,
};

const connector = connect(mapState, mapDispatch);

export default connector(UserPage);
