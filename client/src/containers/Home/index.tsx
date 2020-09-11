import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Box } from '@material-ui/core';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';
import Title from 'containers/Home/components/Title';
import CardDisplay from 'containers/Home/components/CardsDisplay';
import { RootState } from 'redux/rootReducer';
import { loadTopSetups } from 'containers/Home/logic/actions';
import Spinner from 'components/Spinner';
import NewsPage from 'containers/NewsPage';
import styles from 'containers/Home/styles.module.scss';

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
      return (
        <Box className="spinnerWrapper">
          <Spinner load />
        </Box>
      );
    } else {
      return (
        <div className={styles.wholeContentContainer}>
          {/* <Title /> */}
          {children}
          {!!setups?.length && (
            <>
              <div className={styles.homeContentContainer}>
                <h2>Most Popular Setups</h2>
                <div className={styles.gridTopCard}>
                  {' '}
                  <CardDisplay setups={topSetup} big />
                </div>
                <div className={styles.gridOrdinaryCards}>
                  {' '}
                  <CardDisplay setups={ordinarySetups} showButton={showButton} />
                </div>
                <div className={styles.gridNewsDisplay}>
                  <NewsPage role="aside" countNews={2} />
                </div>
              </div>
            </>
          )}
        </div>
      );
    }
  };

  return (
    <PageComponent titleSelector="Home" selectedMenuItemNumber={MenuItems.Home}>
      {renderContent()}
    </PageComponent>
  );
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
