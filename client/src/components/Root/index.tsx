import React from 'react';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import classes from './styles.module.scss';
import Title from 'components/Title';

type MenuItemNumber = 0 | 1 | 2 | 3 | 4;

interface I_Props {
  pageTitle: string;
  selectedMenuItemNumber: MenuItemNumber;
  leftComponent: React.ReactElement;
  rightComponent: React.ReactElement;
}

const RootComponent: React.FC<I_Props> = ({ pageTitle, selectedMenuItemNumber, leftComponent, rightComponent }) => {
  return (
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
