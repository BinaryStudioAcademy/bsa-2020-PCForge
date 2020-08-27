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

const showButton = setups.length <= 4;

  const topSetup = [setups[0]];
  const ordinarySetups = setups.filter((setup, index) => {
    return index !== 0;
  });

  



  const renderContent = () => {
    if (showSpinner) {
      return <Spinner load />;
    } else {
      return (
       <>
          <Title />
          {children}
          {!!setups && !!setups.length && (
            <>
            <div className={styles.homeContentContainer}>
            <h2>Setups</h2>
              <div className={styles.gridTopCard}> <CardDisplay setups={topSetup} /></div>
              <div className={styles.gridOrdinaryCards}> <CardDisplay setups={ordinarySetups} showButton={showButton}/></div>
              <div className={styles.gridNewsDisplay}>
                <PewsPage role="aside" countNews={2} />
              </div>
            </div>
            </>
            
          )}
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


// className={styles.cardsDisplay} 