import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Card, CardContent } from '@material-ui/core';
import { fetchNewsAction } from './actions';
import Button, { ButtonType } from '../../components/BasicComponents/Button';
import styles from './styles.module.scss';

type PropsType = {
  role?: 'page' | 'aside';
  countNews?: number;
  className?: string;
};

const PewsPage = ({ role = 'page', countNews, className = '' }: PropsType): JSX.Element => {
  // const newsAll = useSelector((state: { news: TypeNewsState }) => state.news.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsAction());
  }, []);

  const newsAll = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet.',
      content: '',
      image: 'https://i.pinimg.com/originals/a9/4f/13/a94f13979429b759ba85ef6ce5e7f620.jpg',
      createdAt: new Date(),
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet.',
      content: '',
      image: 'https://i.pinimg.com/originals/a9/4f/13/a94f13979429b759ba85ef6ce5e7f620.jpg',
      createdAt: new Date(),
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet.',
      content: '',
      image: 'https://i.pinimg.com/originals/a9/4f/13/a94f13979429b759ba85ef6ce5e7f620.jpg',
      createdAt: new Date(),
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet.',
      content: '',
      image: 'https://i.pinimg.com/originals/a9/4f/13/a94f13979429b759ba85ef6ce5e7f620.jpg',
      createdAt: new Date(),
    },
  ];

  const newsSlice = countNews ? newsAll.slice(0, countNews) : newsAll;

  const newsElements = newsSlice.map((news) => (
    <Card key={news.id} className={styles.newsCard}>
      <img src={news.image} alt={news.title} />
      <CardContent className={styles.content}>
        <h3 className={styles.title}>{news.title}</h3>
        <p className={styles.date}>{new Date(news.createdAt).toDateString()}</p>
        <Button className={styles.btnRead} buttonType={ButtonType.primary}>
          Read Article
        </Button>
      </CardContent>
    </Card>
  ));

  return (
    <Box className={styles.newsWrapper}>
      {role === 'page' ? <h1>News</h1> : <h2>News</h2>}
      <Box className={styles.cardsWrapper}>{newsElements}</Box>
    </Box>
  );
};

export default PewsPage;
