import React, { useEffect } from 'react';
import PageComponent from 'containers/PageComponent';
import SetupCard from 'components/SetupCard';
import classes from './styles.module.scss';
import TopFiveList from 'components/TopFiveList';
import { MenuItems } from 'common/enums';
import Title from 'components/Title';
import { RootState } from 'redux/rootReducer';
import { fetchSetups, fetchTopSetups } from 'containers/SetupsPage/actions';
import { ConnectedProps, connect } from 'react-redux';
import { Cpu } from 'common/models/cpu';
import { Gpu } from 'common/models/gpu';
import { Ram } from 'common/models/ram';

const SetupPage: React.FC<PropsFromRedux> = ({ setups, fetchSetups, fetchTopSetups }) => {
  useEffect(() => {
    fetchSetups();
    fetchTopSetups();
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
          processor={setup.cpu.name}
          gpu={setup.gpu.name}
          ram={setup.ram.name}
          comments={Number(setup.commentCount)}
          rating={setup.rating | 0}
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
  fetchTopSetups,
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
