import React, { ReactElement, useCallback, useState } from 'react';
import { Box, FormControl, OutlinedInput, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import { debounce } from 'lodash-es';

import styles from './styles.module.scss';

type Props = {
  onChange: (event: string) => void;
  className?: string;
  debounceTimeout?: number;
};
const Search = ({ onChange, className = '', debounceTimeout = 300 }: Props): ReactElement => {
  const [search, setSearch] = useState('');

  const onChangeHandler = useCallback(debounce(onChange, debounceTimeout), []);

  const changeSearch = (value: string): void => {
    setSearch(value);
    onChangeHandler(value);
  };

  return (
    <Box className={className}>
      <FormControl className={styles.search} fullWidth={true} variant="outlined" size="small">
        <OutlinedInput
          className={styles.inputWrap}
          fullWidth={true}
          placeholder="Search"
          value={search}
          onChange={(ev) => changeSearch(ev.target.value)}
          endAdornment={
            <InputAdornment className={styles.icon} position="end">
              {search ? (
                <CancelIcon className={styles.iconFill} onClick={() => changeSearch('')} />
              ) : (
                <SearchIcon className={styles.iconFill} />
              )}
            </InputAdornment>
          }
          labelWidth={0}
        />
      </FormControl>
    </Box>
  );
};

export default Search;
