import React, { useEffect, useState } from 'react';
import PageComponent from 'containers/PageComponent';
import Card from 'components/Card';
import classes from 'containers/GamesPage/styles.module.scss';
import TopFiveList from 'components/TopFiveList';
import { MenuItems } from 'common/enums';
import Title from 'components/Title';
import { RootState } from 'redux/rootReducer';
import { fetchGames, fetchTopGames, changeSortType } from 'containers/GamesPage/actions';
import { ConnectedProps, connect } from 'react-redux';
import { InputLabel, FormControl, Box, Select, MenuItem } from '@material-ui/core';
import Paginator from 'components/Paginator';
import Spinner from 'components/Spinner';

const GamesPage: React.FC<PropsFromRedux> = ({
  games,
  showSpinner,
  filter,
  fetchGames,
  fetchTopGames,
  gamesCount,
  changeSortType,
}) => {
  const [pagination, setPagination] = useState({ from: 0, count: filter.viewCount });

  useEffect(() => {
    fetchGames({
      ...pagination,
      sortType: filter.sort,
    });
  }, [pagination, filter.sort]);

  useEffect(() => {
    fetchTopGames();
  }, []);

  const changeSortingType = (event: React.ChangeEvent<{ value: unknown }>) => {
    changeSortType(event.target.value as string);
  };

  const createCards = () => {
    const cardsElements = games.map((game) => {
      return (
        <Card
          key={game.id}
          id={game.id}
          imageSource={game.image}
          name={game.name}
          processor={game.minimalCpu.name}
          gpu={game.minimalGpu.name}
          ram={`${game.minimalRamSize}`}
          comments={Number(game.comments_count)}
          rating={game.rating | 0}
          type="game"
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
          <Title title="Games" />

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
                countComponents={gamesCount}
                countComponentsOnPage={filter.viewCount}
                setPagination={setPagination}
              />
            </div>
            <div className={classes.rightContent}>{<TopFiveList title="Games" />}</div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return <PageComponent selectedMenuItemNumber={MenuItems.Games}>{renderContent()}</PageComponent>;
};

const mapState = (state: RootState) => ({
  games: state.gamesPage.games,
  showSpinner: state.gamesPage.showSpinner,
  filter: state.gamesPage.filter,
  gamesCount: state.gamesPage.gamesCount,
});
const mapDispatch = {
  fetchGames,
  fetchTopGames,
  changeSortType,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(GamesPage);
