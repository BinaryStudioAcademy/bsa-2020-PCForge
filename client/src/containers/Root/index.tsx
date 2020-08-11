import React, { useEffect, useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import classes from './styles.module.scss';
import { Redirect } from 'react-router-dom';
import { MenuItems, Routes } from 'common/enums';

interface IProps {
  pageTitle: string;
  selectedMenuItemNumber: MenuItems;
  leftComponent: React.ReactElement;
  rightComponent: React.ReactElement;
}

const RootComponent: React.FC<IProps> = ({ pageTitle, selectedMenuItemNumber, leftComponent, rightComponent }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    checkIsUserAuthenticated();
  }, []);

  const checkIsUserAuthenticated = async () => {
    const currentToken: string = localStorage.getItem('token') || '';
    console.log('checkIsUserAuthenticated -> currentToken', currentToken);
    if (currentToken) {
      const response = await fetch('http://localhost:5001/api/auth/logged_in', {
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
    <div>Loading...</div>
  ) : !isAuthenticated ? (
    <Redirect to={Routes.LOGIN} />
  ) : (
    <div className={classes.rootComponent}>
      <NavigationBar selectedMenuItemNumber={selectedMenuItemNumber} />
      <div className={classes.contentWrapper}>
        <div className={classes.contentBody}>
          <Title title={pageTitle} />
          <div className={classes.mainContent}>
            <div className={classes.leftContent}>{leftComponent}</div>
            <div className={classes.rightContent}>{rightComponent}</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RootComponent;
