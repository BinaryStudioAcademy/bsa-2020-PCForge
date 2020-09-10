import React, { Component, useEffect } from 'react';
import { MenuItems } from 'common/enums/MenuItems';
import PageComponent from 'containers/PageComponent';
import { RootState } from 'redux/rootReducer';
import { getNews } from './actions';
import { connect, ConnectedProps } from 'react-redux';
import NotFound from 'containers/NotFound';
import { Box, Container, Grid, CardMedia } from '@material-ui/core';
import Spinner from 'components/Spinner';
import styles from './styles.module.scss';
import { RouteComponentProps } from 'react-router-dom';

const OneNewsPage: React.FC<Props> = (props) => {
  console.log('props', props);
  // if (error) {
  //   return <NotFound history={history} location={location} match={match} />;
  // }
  useEffect(() => {
    props.getNews({ id: props.match.params.id });
  }, []);

  if (props.loading) {
    return (
      <PageComponent>
        <Box className="spinnerWrapper">
          <Spinner load />
        </Box>
      </PageComponent>
    );
  }

  return (
    <PageComponent selectedMenuItemNumber={MenuItems.Setup}>
      <Container className={styles.mainWrapper}>
        <Grid className={styles.contentWrapper}>
          <Grid className={styles.gameWrapper} xs={12} container direction="column">
            <Grid className={styles.infoWrapper} item xs={12} container alignItems="center">
              <Grid item xs={12} md={7} lg={8}>
                <Grid className={styles.titleWrapper} item xs={12} container alignItems="center">
                  <h1 className={styles.gameTitle}>{props.news?.title}</h1>
                </Grid>
              </Grid>
              <Grid className={styles.imageWrapper} item xs={12} md={5} lg={4}>
                <CardMedia className={styles.imageItem} component="img" src={props.news?.image} />
                <Grid className={styles.ratingBox} item xs={12} container alignItems="center" justify="center"></Grid>
              </Grid>
            </Grid>
            <Grid className={styles.gameDescription} item xs={12}>
              <span className={styles.fieldName}>News:</span>
              <br />
              <pre>{props.news?.content}</pre>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </PageComponent>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    news: state.oneNewsPage.news,
    loading: state.oneNewsPage.showSpinner,
    error: state.oneNewsPage.error,
  };
};

const mapDispatchToProps = { getNews };

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RouteComponentProps<{ id: string }>;

export default connector(OneNewsPage);
