import React, { ChangeEvent, useState } from 'react';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import styles from 'components/Paginator/styles.module.scss';

type PropsType = {
  countComponents: number;
  countComponentsOnPage: number;
  setPagination: (params: { from: number; count: number }) => void;
  commentPage?: number;
};

const Paginator = ({
  countComponents,
  countComponentsOnPage,
  setPagination,
  commentPage = 1,
}: PropsType): JSX.Element => {
  const count = Math.ceil(countComponents / countComponentsOnPage);
  const [page, setPage] = useState(1);

  React.useEffect(() => {
    setPage(commentPage);
    setPagination({
      from: (commentPage - 1) * countComponentsOnPage,
      count: countComponentsOnPage,
    });
  }, [count]);

  const onChangeHandler = (event: ChangeEvent<unknown>, newPage: number) => {
    if (page === newPage) return;
    setPage(newPage);
    setPagination({
      from: (newPage - 1) * countComponentsOnPage,
      count: countComponentsOnPage,
    });
  };

  return (
    <Box className={styles.paginator}>
      <Pagination
        renderItem={(item) => <PaginationItem classes={{ selected: styles.selected }} {...item} />}
        count={count}
        page={page}
        onChange={onChangeHandler}
      />
    </Box>
  );
};

export default Paginator;
