import React from 'react';
import { useSelector } from 'react-redux';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import classes from './styles.module.scss';
import { MenuItems } from 'common/enums';
import Spinner from 'components/Spinner';
import TopBar from 'containers/TopBar';
import InjectNotifications from 'containers/Notifications/inject';

interface ILoginResult {
  logged_in: boolean;
  user: User;
}

const PageComponent: React.FC<IProps> = ({ selectedMenuItemNumber, children }) => {
  const isAdmin = useSelector((state: RootState) => state.auth.user?.isAdmin);
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

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
