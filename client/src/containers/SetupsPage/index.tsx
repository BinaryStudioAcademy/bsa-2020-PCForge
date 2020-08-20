import React, { useEffect } from 'react';
import PageComponent from 'containers/PageComponent';
import SetupCard from 'components/SetupCard';
import classes from './styles.module.scss';
import TopFiveList from 'components/TopFiveList';
import { MenuItems } from 'common/enums';
import Title from 'components/Title';
import { RootState } from 'redux/rootReducer';
import { fetchSetups } from 'containers/SetupsPage/actions';
import { ConnectedProps, connect } from 'react-redux';

interface Setup {
  id: string;
  title: string;
  description: string;
  image: string;
  cpu: string;
  gpu: string;
  ram: string;
}

interface I_Props {
  //Change it for mandatory prop when redux will be added
  setups: Array<Setup>;
}

const SetupPage: React.FC<PropsFromRedux> = ({ setups, fetchSetups }) => {
  useEffect(() => {
    fetchSetups();
  }, []);

  const createCards = () => {
    //When has been added functionality for getting data from server, change 'Cards, to setups'
    const cardsElements = setups.map((setup) => {
      return (
        <SetupCard
          key={setup.id}
          id={setup.id}
          imageSource={setup.image}
          setupName={setup.title}
          // processor={setup.cpu}
          // gpu={setup.gpu}
          // ram={setup.ram}
          // comments={setup.comments}
          // rating={setup.rating}
        />
      );
    });

    return <div className={classes.cardsContainer}>{cardsElements}</div>;
  };

  return (
    <PageComponent selectedMenuItemNumber={MenuItems.Setup}>
      <div className={classes.contentBody}>
        <Title title="User setups" />
        <div className={classes.mainContent}>
          <div className={classes.leftContent}>{createCards()}</div>
          <div className={classes.rightContent}>{<TopFiveList />}</div>
        </div>
      </div>
    </PageComponent>
  );
};

const mapState = (state: RootState) => ({
  setups: state.setups.setups,
});
const mapDispatch = {
  fetchSetups,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

//When has been added functionality, change state type
// const mapStateToProps = (state: any) => {
//   return {
//     setups: state.setups,
//   };

// };

// connect(mapStateToProps)(SetupPage);

export default connector(SetupPage);
