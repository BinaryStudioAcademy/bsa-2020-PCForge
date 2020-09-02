import React from 'react';
import { useSelector } from 'react-redux';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import classes from './styles.module.scss';
import { MenuItems } from 'common/enums';
import Spinner from 'components/Spinner';
import TopBar from 'containers/TopBar';
import { RootState } from 'redux/rootReducer';

interface IProps {
  selectedMenuItemNumber?: MenuItems;
  children: React.ReactElement;
}

const PageComponent: React.FC<IProps> = ({ selectedMenuItemNumber, children }) => {
  const isAdmin = useSelector((state: RootState) => state.auth.user?.isAdmin);
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  return isLoading ? (
    <div className={classes.spinnerWrapper}>
      <Spinner />
    </div>
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
