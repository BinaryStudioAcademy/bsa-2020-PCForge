import React, { useEffect, useState } from 'react';
import PageComponent from 'containers/PageComponent';
import Card from 'components/Card';
import classes from 'containers/SetupsPage/styles.module.scss';
import TopFiveList from 'components/TopFiveList';
import { MenuItems } from 'common/enums';
import Title from 'components/Title';
import { RootState } from 'redux/rootReducer';
import { fetchSetups, fetchTopSetups, changeSortType } from 'containers/SetupsPage/actions';
import { ConnectedProps, connect } from 'react-redux';
import { InputLabel, FormControl, Box, Select, MenuItem } from '@material-ui/core';
import Paginator from 'components/Paginator';
import Spinner from 'components/Spinner';

const SetupPage: React.FC<PropsFromRedux> = ({
  setups,
  showSpinner,
  filter,
  fetchSetups,
  fetchTopSetups,
  setupsCount,
  changeSortType,
}) => {
  const [pagination, setPagination] = useState({ from: 0, count: filter.viewCount });

  useEffect(() => {
    fetchSetups({ ...pagination, sort: filter.sort });
  }, [pagination, filter.sort]);

  useEffect(() => {
    fetchTopSetups();
  }, []);

  const changeSortingType = (event: React.ChangeEvent<{ value: unknown }>) => {
    changeSortType(event.target.value as string);
    // fetchSetups({ ...pagination, sort: event.target.value, from: 0, count: filter.viewCount });
  };

  const createCards = () => {
    //When has been added functionality for getting data from server, change 'Cards, to setups'
    const cardsElements = setups.map((setup) => {
      return (
        <Card
          key={setup.id}
          id={setup.id}
          imageSource={setup.image}
          name={setup.title}
          processor={setup.cpu.name}
          gpu={setup.gpu.name}
          ram={setup.ram.name}
          comments={Number(setup.comments_count)}
          rating={setup.rating | 0}
          type="setup"
        />
      );
    });

    return <div className={classes.cardsContainer}>{cardsElements}</div>;
  };

  const renderContent = () => {
    return (
      <React.Fragment>
        <Box className={showSpinner ? classes.spinnerWrapper : classes.hidden}>
          <Spinner load />
        </Box>
        <div className={showSpinner ? classes.hidden : classes.contentBody}>
          <Title title="Users Setups" />

          <FormControl className={classes.filter}>
            <InputLabel htmlFor="select" className={classes.MuiInputLabelRoot}>
              Sort By
            </InputLabel>
            <Select
              onChange={changeSortingType}
              defaultChecked={true}
              defaultValue="mostRated"
              className={classes.Select}
            >
              <MenuItem value="mostRated">Top Rating</MenuItem>
              <MenuItem value="oldest">Oldest</MenuItem>
              <MenuItem value="commendable">Most Commented</MenuItem>
              <MenuItem value="newest">Newest</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.mainContent}>
            <div className={classes.leftContent}>
              <div>{createCards()}</div>
              <Paginator
                countComponents={setupsCount}
                countComponentsOnPage={filter.viewCount}
                setPagination={setPagination}
              />
            </div>
            <div className={classes.rightContent}>{<TopFiveList title="Setups" />}</div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return <PageComponent selectedMenuItemNumber={MenuItems.Setup}>{renderContent()}</PageComponent>;
};

const mapState = (state: RootState) => ({
  setups: state.setups.setups,
  showSpinner: state.setups.showSpinner,
  filter: state.setups.filter,
  setupsCount: state.setups.setupsCount,
});
const mapDispatch = {
  fetchSetups,
  fetchTopSetups,
  changeSortType,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SetupPage);
