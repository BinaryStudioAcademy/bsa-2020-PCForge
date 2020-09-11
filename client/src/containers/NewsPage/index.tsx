import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, CardContent } from '@material-ui/core';
import { fetchNewsAction } from './actions';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import styles from 'containers/NewsPage/styles.module.scss';
import { TypeNewsState } from 'containers/NewsPage/reducer';
import PageComponent from 'containers/PageComponent';
import Title from 'components/Title';
import history from 'browserHistory';
import { MenuItems } from 'common/enums';

type PropsType = {
  role?: 'page' | 'aside';
  countNews?: number;
  className?: string;
};

const NewsPage = ({ role = 'page', countNews, className = '' }: PropsType): JSX.Element => {
  const newsAll = useSelector((state: { news: TypeNewsState }) => state.news.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsAction());
  }, []);

  const onClickHandler = (id: number) => {
    return (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      history.push(`/news/${id}`);
    };
  };
  const newsSlice = countNews ? newsAll.slice(0, countNews) : newsAll;

  const renderNewsTitle = (title: string, length = 70) => {
    const ellipsis = title.length > length ? '...' : '';
    return title.substring(0, length) + ellipsis;
  };

  const newsElements = newsSlice.map((news) => (
    <Card onClick={onClickHandler(news.id)} key={news.id} className={styles.newsCard}>
      <img src={news.image} alt={news.title} />
      <CardContent className={styles.content}>
        <div style={{ minHeight: role === 'page' ? 148 : 100 }}>
          <h3 className={styles.title}>{renderNewsTitle(news.title)}</h3>
          <p className={styles.date}>{new Date(news.createdAt).toDateString()}</p>
        </div>
        <Button icon="ArrowForward" className={styles.btnRead} buttonType={ButtonType.primary}>
          Read
        </Button>
      </CardContent>
    </Card>
  ));

  const news = (
    <Box className={styles.newsWrapper}>
      {role === 'page' ? null : <h2>News</h2>}
      <Box className={styles.cardsWrapper}>{newsElements}</Box>
    </Box>
  );

  return role === 'page' ? (
    <PageComponent titleSelector="News" selectedMenuItemNumber={MenuItems.News}>
      {news}
    </PageComponent>
  ) : (
    news
  );
};

export default NewsPage;
