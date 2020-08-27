import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';
import Title from './components/Title';
import CardDisplay from './components/CardsDisplay';
import { RootState } from 'redux/rootReducer';
import { loadTopSetups } from './logic/actions';
import Spinner from 'components/Spinner';
import Grid from '@material-ui/core/Grid';
import PewsPage from 'containers/NewsPage';
import styles from './styles.module.scss';

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const Home: React.FC<Props> = (props): JSX.Element => {
  const { setups, loadTopSetups: topSetupsLoad, showSpinner, children } = props;

  useEffect(() => {
    topSetupsLoad();
  }, []);

  const renderContent = () => {
    if (showSpinner) {
      return <Spinner load />;
    } else {
      return (
        <>
          <Title />
          <Grid container spacing={5}>
            <Grid item xs={12} lg={9} xl={9}>
              {children}
              {!!setups && !!setups.length && <CardDisplay setups={setups} />}
            </Grid>
            <Grid className={styles.newsComponent} item xs={12} lg={3} xl={3}>
              <PewsPage role="aside" countNews={2} />
            </Grid>
          </Grid>
        </>
      );
    }
  };

  return <PageComponent selectedMenuItemNumber={MenuItems.Home}>{renderContent()}</PageComponent>;
};

const mapState = (state: RootState) => ({
  setups: state.homePage.setups,
  showSpinner: state.homePage.showSpinner,
});

const mapDispatch = {
  loadTopSetups,
};

const connector = connect(mapState, mapDispatch);

export default connector(Home);
