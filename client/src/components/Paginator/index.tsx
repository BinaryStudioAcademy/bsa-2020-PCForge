import React, { ChangeEvent, useState } from 'react';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import styles from 'components/Paginator/styles.module.scss';

type PropsType = {
  countComponents: number;
  countComponentsOnPage: number;
  setPagination: (params: { from: number; count: number }) => void;
};

const Paginator = ({ countComponents, countComponentsOnPage, setPagination }: PropsType): JSX.Element => {
  const count = Math.ceil(countComponents / countComponentsOnPage);
  const [page, setPage] = useState(1);

  const onChangeHandler = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
    setPagination({
      from: (page - 1) * countComponentsOnPage,
      count: countComponentsOnPage,
    });
  };

  return (
    <Box className={styles.paginator}>
      <Pagination count={count} page={page} onChange={onChangeHandler} />
    </Box>
  );
};

export default Paginator;
