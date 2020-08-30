import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { User } from 'common/models/user';
import { loginRequestSuccess } from '../Auth/actions';

import React, { useEffect, useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import classes from './styles.module.scss';
import { Redirect } from 'react-router-dom';
import { MenuItems, Routes } from 'common/enums';
import Spinner from 'components/Spinner';
import TopBar from 'containers/TopBar';
import { getToken, clearToken } from 'helpers/tokenHelper';
import * as Sentry from '@sentry/react';
import InjectNotifications from 'containers/Notifications/inject';

interface ILoginResult {
  logged_in: boolean;
  user: User;
}

const PageComponent: React.FC<Props> = ({
  selectedMenuItemNumber,
  loginRequestSuccess: propsLoginRequestSuccess,
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();
  const [isLoading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkIsUserAuthenticated();
  }, []);

  const checkIsUserAuthenticated = async () => {
    const currentToken: string = getToken() || '';
    console.log('checkIsUserAuthenticated -> currentToken', currentToken);
    if (currentToken) {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';
      const response = await fetch(`${apiUrl}/auth/logged_in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: currentToken,
        }),
      });
      const isAuthenticated = await response.json();
      console.log('checkIsUserAuthenticated -> isAuthenticated', isAuthenticated);
      const isSuccessfullyAuthenticated = checkIsSuccessfullyAuthenticated(isAuthenticated);
      setIsAuthenticated(isSuccessfullyAuthenticated);
      if (!isSuccessfullyAuthenticated) {
        await clearToken();
      }
      setIsAdmin(isAuthenticated.user.isAdmin);
      setIsAuthenticated(isAuthenticated.logged_in);
      propsLoginRequestSuccess(isAuthenticated.user);
    }
    setLoading(false);
  };

  const checkIsSuccessfullyAuthenticated = (loginResult: ILoginResult) => {
    if (loginResult.logged_in) {
      return true;
    } else {
      return false;
    }
  };

  return isLoading ? (
    <div className={classes.spinnerWrapper}>
      <Spinner />
    </div>
  ) : !isAuthenticated ? (
    <>
      {console.log('REDIRECT')}
      <Redirect to={Routes.LOGIN} />
    </>
  ) : (
    <div className={classes.rootComponent}>
      <InjectNotifications />
      <TopBar />
      <NavigationBar selectedMenuItemNumber={selectedMenuItemNumber} isAdmin={isAdmin} />
      <div className={classes.contentWrapper}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

const mapState = (state: RootState) => ({});

const mapDispatch = {
  loginRequestSuccess,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  selectedMenuItemNumber?: MenuItems;
  children: React.ReactElement;
};

export default connector(PageComponent);
