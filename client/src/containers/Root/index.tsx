import React, { useEffect, useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import classes from './styles.module.scss';
import { Redirect } from 'react-router-dom';

type MenuItemNumber = 0 | 1 | 2 | 3 | 4;

interface IProps {
  pageTitle: string;
  selectedMenuItemNumber: MenuItemNumber;
  leftComponent: React.ReactElement;
  rightComponent: React.ReactElement;
}

const RootComponent: React.FC<IProps> = ({ pageTitle, selectedMenuItemNumber, leftComponent, rightComponent }) => {
  useEffect(() => {
    checkIsUserAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkIsUserAuthenticated = async () => {
    const currentToken: string = localStorage.getItem('token') || '';
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
  };

  return !isAuthenticated ? (
    <Redirect to="/login" />
  ) : (
    <div className={classes.rootComponent}>
      <NavigationBar selectedMenuItemNumber={selectedMenuItemNumber} />
      <div className={classes.rootComponent__wrapper}>
        <div className={classes.rootComponent__body}>
          <Title title={pageTitle} />
          <div className={classes.mainContent}>
            <div className={classes.mainContent__left}>{leftComponent}</div>
            <div className={classes.mainContent__right}>{rightComponent}</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RootComponent;
