import React, { useEffect } from 'react';
import PageComponent from 'containers/PageComponent';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import UserInfo from './components/UserInfo';
import { RootState } from 'redux/rootReducer';
import { loadUser, updateUser, loadSetups } from './logic/actions';
import Spinner from 'components/Spinner';

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const UserPage = (props: Props) => {
  const { loadedUser, showSpinner, loadUser, loadSetups, updateUser: userUpdate, setups } = props;

  const { id } = useParams();

  useEffect(() => {
    loadUser(parseInt(id));
    loadSetups(parseInt(id));
  }, []);

  const renderContent = () => {
    if (showSpinner) {
      return <Spinner load />;
    } else if (loadedUser) {
      return <UserInfo user={loadedUser} updateUser={userUpdate} setups={setups} />;
    } else {
      return <Redirect to="/404" />;
    }
  };

  return <PageComponent>{renderContent()}</PageComponent>;
};

const mapState = (state: RootState) => ({
  loadedUser: state.user.loadedUser,
  showSpinner: state.user.showSpinner,
  setups: state.user.setups,
});

const mapDispatch = {
  loadUser,
  updateUser,
  loadSetups,
};

const connector = connect(mapState, mapDispatch);

export default connector(UserPage);
