import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';
import Title from './components/Title';
import CardDisplay from './components/CardsDisplay';
import { RootState } from 'redux/rootReducer';
import { loadTopSetups } from './logic/actions';
import Spinner from 'components/Spinner';

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const Home = (props: Props): JSX.Element => {
  const { setups, loadTopSetups: topSetupsLoad, showSpinner } = props;

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
          {setups && setups.length && <CardDisplay setups={setups} />}
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
