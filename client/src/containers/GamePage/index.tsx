import React, { Component } from 'react';
import { Game } from 'common/models/game';
import { MenuItems } from 'common/enums/MenuItems';
import PageComponent from 'containers/PageComponent';
import { CardMedia, Container, Grid, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import Divider from 'components/BasicComponents/Divider';
import styles from 'containers/GamePage/styles.module.scss';
import RatingBox from 'components/BasicComponents/RatingBox';
import Comments from 'components/Comments';
import { Comment } from 'common/models/comment';

interface IGamePageState {
  rate: number;
  game: Game;
  comments: Comment[];
}

class GamePage extends Component<Record<string, unknown>, IGamePageState> {
  constructor(props: Record<string, unknown>) {
    const { rate, game, comments } = mockGame();
    super(props);
    this.state = {
      rate,
      game,
      comments,
    };
  }

  render(): JSX.Element {
    const game = this.state.game;
    return (
      <PageComponent selectedMenuItemNumber={MenuItems.Setup}>
        <Container className={styles.mainWrapper}>
          <Grid className={styles.contentWrapper}>
            <Grid className={styles.gameWrapper} container direction="row">
              <div className={styles.infoWrapper}>
                <Grid className={styles.titleWrapper} item xs={12} container alignItems="center">
                  <h1 className={styles.gameTitle}>{game.name}</h1>
                  <div className={styles.ratingBox}>
                    <RatingBox name="setup-card" ratingValue={this.state.rate} disabled={false} />
                  </div>
                </Grid>
                <div className={styles.gameRelease}>
                  <span className={styles.fieldName}>Year:</span> {game.year}
                </div>
                <div className={styles.gameDescription}>
                  <span className={styles.fieldName}>Description:</span>
                  <br />
                  {game.description}
                </div>
              </div>
              <div className={styles.imageWrapper}>
                <CardMedia className={styles.imageItem} component="img" src={game.image} />
              </div>
            </Grid>
            <Grid className={styles.requirementsWrapper} container direction="row" justify="space-between">
              <Grid item xs={12} md={5} className={styles.minimalRequirements}>
                <h2>Minimal Requirements</h2>
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
              <Grid className={styles.recommendedRequirements} item xs={12} md={5}>
                <h2>Recommended Requirements</h2>
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
              <Comments
                commentsPerPage={2}
                commentsTotal={20}
                comments={this.state.comments}
                onCreateComment={console.log}
                onPaginationToggle={console.log}
              />
            </Grid>
          </Grid>
        </Container>
      </PageComponent>
    );
  }
}

function mockGame(): IGamePageState {
  return {
    game: {
      id: 1,
      name: 'Hardspace: Shipbreaker',
      year: 2020,
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/1161580/header.jpg',
      description:
        'Across your career, you’ll have the privilege of paying your debt to us by purchasing salvaging rights to increasingly large and valuable ships. Cut them open and extract as much value as possible! You are equipped with the latest in LYNX tech. Carve entry points, salvage valuable materials and components with your cutting tool or slice scrap metal at any angle into a million pieces as you ponder a lonely existence… the possibilities are endless! Be cautious – dying is extremely unprofitable. We strongly advise upgrading your tools, helmet and suit to take on more lucrative contracts - all you need to worry about is how you’ll pay for it! JOIN THE COMMUNITY\n' +
        'Hardspace: Shipbreaker is a game in early access. Don’t hesitate to join our official server and share your feedback with the development team so that we can improve Hardspace: Shipbreaker together.',
      recommendedRamSize: 16,
      minimalRamSize: 8,
      createdAt: new Date('2020-08-10 04:54:27.906+03'),
      updatedAt: new Date('2020-08-10 04:54:27.906+03'),
      recommendedCpu: {
        id: 759,
        name: 'AMD Ryzen 5 2600',
        performance: 13210,
        clockspeed: 3400,
        tdp: 65,
        cores: 6,
        class: 'Desktop',
        createdAt: new Date('2020-08-10 04:54:26.563+03'),
        updatedAt: new Date('2020-08-10 04:54:26.563+03'),
      },
      minimalCpu: {
        id: 566,
        name: 'AMD Ryzen 3 1300X',
        performance: 7013,
        clockspeed: 3500,
        tdp: 65,
        cores: 4,
        class: 'Desktop',
        createdAt: new Date('2020-08-10 04:54:26.284+03'),
        updatedAt: new Date('2020-08-10 04:54:26.284+03'),
      },
      recommendedGpu: {
        id: 489,
        name: 'Radeon RX Vega 56',
        interface: 'PCIe 3.0 x16',
        memorySize: 8192,
        coreClocks: 1471,
        opengl: '4.5',
        tdp: 210,
        performance: 13281,
        createdAt: new Date('2020-08-10 04:54:24.967+03'),
        updatedAt: new Date('2020-08-10 04:54:24.967+03'),
      },
      minimalGpu: {
        id: 463,
        name: 'Radeon R9 380',
        interface: 'PCIe 3.0 x16',
        memorySize: 4096,
        coreClocks: 970,
        opengl: '4.6',
        tdp: 190,
        performance: 6085,
        createdAt: new Date('2020-08-10 04:54:24.967+03'),
        updatedAt: new Date('2020-08-10 04:54:24.967+03'),
      },
    },
    rate: 4.7,
    comments: [
      /*  {
        id: 1,
        authorId: 1,
        author: 'Benedict Cumberbatch',
        value: 'Nice Game. I like it!',
        createdAt: new Date(),
        updatedAt: new Date(),
        countLikes: 2,
        countDislikes: 4,
        isLikedByUser?: true,
        isDislikedByUser?: false,
      },
      {
        id: 2,
        authorId: 2,
        author: 'Brandenburg Königsberg',
        value: 'Playing this game for hours. You should try it.',
        createdAt: new Date(),
        updatedAt: new Date(),
        countLikes: 2,
        countDislikes: 4,
        isLikedByUser?: true,
        isDislikedByUser?: false,
      },
      {
        id: 3,
        authorId: 3,
        author: 'Battlefield Overwatch',
        value: '10/10.',
        createdAt: new Date(),
        updatedAt: new Date(),
        countLikes: 2,
        countDislikes: 4,
        isLikedByUser?: true,
        isDislikedByUser?: false,
      },
      ,*/
    ],
  };
}

export default GamePage;
