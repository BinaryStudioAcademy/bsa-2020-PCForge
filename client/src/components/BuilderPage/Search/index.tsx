import React, { ReactElement } from 'react';
import { Box, FormControl, OutlinedInput, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';

import styles from './styles.module.scss';

type Props = {
  value: string;
  onChange: (event: string) => void;
  className?: string;
};
const Search = ({ value, onChange, className = '' }: Props): ReactElement => {
  return (
    <Box className={className}>
      <FormControl className={styles.search} fullWidth={true} variant="outlined" size="small">
        <OutlinedInput
          className={styles.inputWrap}
          fullWidth={true}
          placeholder="Search"
          value={value}
          onChange={(ev) => onChange(ev.target.value)}
          endAdornment={
            <InputAdornment className={styles.icon} position="end">
              {value ? (
                <CancelIcon className={styles.iconFill} onClick={() => onChange('')} />
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
