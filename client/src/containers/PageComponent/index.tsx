import React, { useEffect, useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import classes from './styles.module.scss';
import { Redirect } from 'react-router-dom';
import { MenuItems, Routes } from 'common/enums';
import Spinner from 'components/Spinner';
import TopBar from 'containers/TopBar';
import { clearToken } from 'helpers/tokenHelper';
import { useDispatch } from 'react-redux';
import { loginRequestSuccess } from '../Auth/actions';
import { authService } from 'api/services/auth.service';
import * as Sentry from '@sentry/react';

interface IProps {
  selectedMenuItemNumber?: MenuItems;
  children: React.ReactElement;
}

const PageComponent: React.FC<IProps> = ({ selectedMenuItemNumber, children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    checkIsUserAuthenticated();
  }, []);

  const checkIsUserAuthenticated = async () => {
    try {
      const isAuthenticated = await authService.getUserByToken();
      setIsAuthenticated(isAuthenticated.logged_in);
      if (!isAuthenticated.logged_in) {
        await clearToken();
      }
      if (isAuthenticated.user) {
        setIsAdmin(isAuthenticated.user.isAdmin);
        dispatch(loginRequestSuccess(isAuthenticated.user));
      }
    } catch (e) {
      // message
    } finally {
      setLoading(false);
    }
  };

  return isLoading ? (
    <div className={classes.spinnerWrapper}>
      <Spinner />
    </div>
  ) : !isAuthenticated ? (
    <Redirect to={Routes.LOGIN} />
  ) : (
    <div className={classes.rootComponent}>
      <TopBar />
      <NavigationBar selectedMenuItemNumber={selectedMenuItemNumber} isAdmin={isAdmin} />
      <div className={classes.contentWrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageComponent;
