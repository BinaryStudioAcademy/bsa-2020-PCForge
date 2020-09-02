import React from 'react';
import { useSelector } from 'react-redux';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import classes from './styles.module.scss';
import Spinner from 'components/Spinner';
import TopBar from 'containers/TopBar';
import InjectNotifications from 'containers/Notifications/inject';
import { RootState } from 'redux/rootReducer';

interface IProps {
  selectedMenuItemNumber?: number;
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
      <InjectNotifications />
      <TopBar />
      <NavigationBar selectedMenuItemNumber={selectedMenuItemNumber} isAdmin={isAdmin} />
      <div className={classes.contentWrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageComponent;
