import React, { Component } from 'react';
import { MenuItems } from 'common/enums/MenuItems';
import CommentableType from 'common/enums/CommentableItems';
import PageComponent from 'containers/PageComponent';
import { Box, CardMedia, Container, Grid, Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';
import Divider from 'components/BasicComponents/Divider';
import styles from 'containers/GamePage/styles.module.scss';
import Comments from 'components/Comments';
import { IGamePageProps, IGamePageState } from './interfaces';
import { RootState } from 'redux/rootReducer';
import * as GameActions from 'containers/GamePage/actions';
import { connect } from 'react-redux';
import NotFound from '../NotFound';
import Spinner from 'components/Spinner';
import ExtendedRatingBox from 'components/BasicComponents/ExtendedRatingBox';

class GamePage extends Component<IGamePageProps, IGamePageState> {
  constructor(props: IGamePageProps) {
    super(props);
  }

  componentDidMount() {
    const id: string = this.props.match.params.id;
    this.props.getGame({ id: +id });
    this.props.getGameRate({ id: +id });
    this.getGameComments({ count: 20, from: 0 });
  }

  public getGameComments = (meta: { count: number; from: number }) => {
    const id: number = +this.props.match.params.id;
    this.props.getGameComments({ id, ...meta });
  };

  public onCreateComment = (value: string) => {
    const id: string = this.props.match.params.id;
    this.props.createGameComment({ id: +id, value: value });
  };

  public onDeleteComment = (id: number) => {
    this.props.deleteGameComment({ id: +id, idGame: this.props.game?.id as number });
  };

  public onRatingSet = (value: number) => {
    this.props.setGameRate({ id: +this.props.match.params.id, value });
  };

  render(): JSX.Element {
    const { game, comments, hasErrorDuringGameFetch, commentsPerPage, commentsCountTotal } = this.props;

    if (hasErrorDuringGameFetch) {
      return <NotFound history={this.props.history} location={this.props.location} match={this.props.match} />;
    }

    if (!game) {
      return (
        <PageComponent selectedMenuItemNumber={MenuItems.Games}>
          <Box className="spinnerWrapper">
            <Spinner load />
          </Box>
        </PageComponent>
      );
    }

    return (
      <PageComponent titleSelector="Game" selectedMenuItemNumber={MenuItems.Games}>
        <Container className={styles.mainWrapper}>
          <Grid className={styles.contentWrapper}>
            <Grid className={styles.gameWrapper} xs={12} container direction="column">
              <Grid className={styles.infoWrapper} item xs={12} container alignItems="center">
                <Grid item xs={12} md={7} lg={8}>
                  <Grid className={styles.titleWrapper} item xs={12} container alignItems="center">
                    <h1 className={styles.gameTitle}>{game.name}</h1>
                  </Grid>
                  <Grid className={styles.gameRelease} item xs={12} container alignItems="center">
                    <span className={styles.fieldName}>{'Release Year: '}</span> {game.year}
                  </Grid>
                </Grid>
                <Grid className={styles.imageWrapper} item xs={12} md={5} lg={4}>
                  <CardMedia className={styles.imageItem} component="img" src={game.image} />
                  <Grid className={styles.ratingBox} item xs={12} container alignItems="center" justify="center">
                    <ExtendedRatingBox
                      averageValue={game.rating}
                      ratingCount={game.ratingCount}
                      ownRating={game.ownRating}
                      name={`game_${game.id}_rating`}
                      onValueSet={this.onRatingSet}
                      clickable={true}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={styles.gameDescription} item xs={12}>
                <span className={styles.fieldName}>Description:</span>
                <br />
                <pre>{game.description}</pre>
              </Grid>
            </Grid>
            <Grid className={styles.requirementsWrapper} container direction="row" justify="space-between">
              <Grid item xs={12} md={6} lg={5} className={styles.minimalRequirements}>
                <Typography variant="h2">Minimal Requirements</Typography>
                <Table>
                  <TableBody>
                    <TableRow key="CPU">
                      <TableCell>CPU</TableCell>
                      <TableCell>{game.minimalCpu.name}</TableCell>
                    </TableRow>
                    <TableRow key="GPU">
                      <TableCell>GPU</TableCell>
                      <TableCell>{game.minimalGpu.name}</TableCell>
                    </TableRow>
                    <TableRow key="RAM">
                      <TableCell>RAM</TableCell>
                      <TableCell>{game.minimalRamSize} Gb</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid className={styles.recommendedRequirements} item xs={12} md={6} lg={5}>
                <Typography variant="h2">Recommended Requirements</Typography>
                <Table>
                  <TableBody>
                    <TableRow key="CPU">
                      <TableCell>CPU</TableCell>
                      <TableCell>{game.recommendedCpu.name}</TableCell>
                    </TableRow>
                    <TableRow key="GPU">
                      <TableCell>GPU</TableCell>
                      <TableCell>{game.recommendedGpu.name}</TableCell>
                    </TableRow>
                    <TableRow key="RAM">
                      <TableCell>RAM</TableCell>
                      <TableCell>{game.recommendedRamSize} Gb</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
            <Divider />
            <Grid className={styles.commentsWrapper} container direction="column">
              {comments && (
                <Comments
                  commentsPerPage={commentsPerPage}
                  commentsTotal={commentsCountTotal}
                  comments={comments}
                  onCreateComment={this.onCreateComment}
                  onDeleteComment={this.onDeleteComment}
                  onPaginationToggle={this.getGameComments}
                  commentableId={game.id}
                  commentableType={CommentableType.Game}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </PageComponent>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    rate: state.gamePage.rate,
    game: state.gamePage.game,
    comments: state.gamePage.comments,
    commentsPerPage: state.gamePage.commentsPerPage,
    commentsCountTotal: state.gamePage.commentsCountTotal,
    hasErrorDuringGameFetch: state.gamePage.hasErrorDuringGameFetch,
  };
};

const mapDispatchToProps = GameActions;

const connector = connect(mapStateToProps, mapDispatchToProps)(GamePage);

export default connector;
