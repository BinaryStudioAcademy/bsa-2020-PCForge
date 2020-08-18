import React, { useEffect, useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import classes from './styles.module.scss';
import { Redirect } from 'react-router-dom';
import { MenuItems, Routes } from 'common/enums';
import Spinner from 'components/Spinner';
import TopBar from 'containers/TopBar';
import { getToken, clearToken } from 'helpers/tokenHelper';

interface IProps {
  selectedMenuItemNumber: MenuItems;
  children: React.ReactElement;
}

const PageComponent: React.FC<IProps> = ({ selectedMenuItemNumber, children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    checkIsUserAuthenticated();
  }, []);

  const checkIsUserAuthenticated = async () => {
    const currentToken: string = (await getToken()) || '';
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
      if (!isAuthenticated.logged_in) {
        clearToken();
      }
      setIsAuthenticated(isAuthenticated.logged_in);
    }
    setLoading(false);
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
      <NavigationBar selectedMenuItemNumber={selectedMenuItemNumber} />
      <div className={classes.contentWrapper}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default PageComponent;
