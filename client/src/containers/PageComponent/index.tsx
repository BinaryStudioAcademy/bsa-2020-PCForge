import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import classes from './styles.module.scss';
import Spinner from 'components/Spinner';
import TopBar from 'containers/TopBar';
import InjectNotifications from 'containers/Notifications/inject';
import { RootState } from 'redux/rootReducer';
import getCurrentTitle from 'common/helpers/getCurrentTitle';

interface IProps {
  selectedMenuItemNumber?: number;
  titleSelector?: string;
}

const PageComponent: React.FC<IProps> = ({ selectedMenuItemNumber, children, titleSelector }) => {
  const isAdmin = useSelector((state: RootState) => state.auth.user?.isAdmin);
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  return isLoading ? (
    <Box className={classes.spinnerWrapper}>
      <Spinner />
    </Box>
  ) : (
    <div className={classes.rootComponent}>
      <InjectNotifications />
      <div className={classes.topBarWrapper}>
        <div className={classes.titleWrapper}>
          <h2>{getCurrentTitle(titleSelector)?.name}</h2>
          <span>{getCurrentTitle(titleSelector)?.description}</span>
        </div>
        <TopBar />
      </div>
      <NavigationBar selectedMenuItemNumber={selectedMenuItemNumber} isAdmin={isAdmin} />
      <div className={classes.contentWrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageComponent;
