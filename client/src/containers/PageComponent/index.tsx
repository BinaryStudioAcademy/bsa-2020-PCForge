import React, { useEffect, useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import classes from './styles.module.scss';
import { Redirect } from 'react-router-dom';
import { MenuItems, Routes } from 'common/enums';
import Spinner from 'components/Spinner';
import TopBar from 'containers/TopBar';

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
    const currentToken: string = localStorage.getItem('token') || '';
    console.log('checkIsUserAuthenticated -> currentToken', currentToken);
    if (currentToken) {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';
      const response = await fetch(`${apiUrl}/api/auth/logged_in`, {
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
        localStorage.removeItem('token');
      }
      setIsAuthenticated(isAuthenticated.logged_in);
    }
    setLoading(false);
  };

  return isLoading ? (
    <div className={classes.spinnerWrapper}>
      <Spinner />
    </div>
  ) : isAuthenticated ? (
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
