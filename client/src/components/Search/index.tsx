import React from 'react';
import { FormControl, OutlinedInput, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import styles from './index.module.sass';

type Props = { value: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void };
const Search = ({ value, onChange }: Props) => (
  <FormControl variant="outlined">
    <OutlinedInput
      classes={{
        root: styles.container,
      }}
      placeholder="Search"
      id="outlined-adornment-weight"
      value={value}
      onChange={onChange}
      endAdornment={
        <InputAdornment
          classes={{
            root: styles.icon,
          }}
          position="end"
        >
          <SearchIcon
            classes={{
              root: styles.iconFill,
            }}
          />
        </InputAdornment>
      }
      aria-describedby="outlined-weight-helper-text"
      inputProps={{
        'aria-label': 'weight',
      }}
      labelWidth={0}
    />
  </FormControl>
);

export default Search;
