import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import UserInfo from './components/UserInfo';
import { RootState } from 'redux/rootReducer';
import { loadUser } from './logic/actions';

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const UserPage = (props: Props) => {
  const { loadedUser, showSpinner, loadUser } = props;

  const { id } = useParams();

  useEffect(() => {
    loadUser(id);
  }, []);

  if (showSpinner) {
    return <div>Spinner</div>;
  } else if(loadedUser) {
    return <UserInfo user={loadedUser} />;
  } else {
    return <Redirect to="/404" />
  }
};

const mapState = (state: RootState) => ({
  loadedUser: state.user.loadedUser,
  showSpinner: state.user.showSpinner,
});

const mapDispatch = {
  loadUser,
};

const connector = connect(mapState, mapDispatch);

export default connector(UserPage);
