import React, { ReactElement } from 'react';
import { FormControl, OutlinedInput, InputAdornment } from '@material-ui/core';
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
    <FormControl className={styles.search} fullWidth={true} variant="outlined" size="small">
      <OutlinedInput
        className={className}
        classes={{
          root: styles.inputWrap,
          input: styles.input,
          focused: styles.focused,
        }}
        fullWidth={true}
        placeholder="Search"
        id="outlined-adornment-weight"
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
        // autoComplete={'asda aaaaaa adfrw'}
        endAdornment={
          <InputAdornment classes={{ root: styles.icon }} position="end">
            {value ? (
              <CancelIcon classes={{ root: styles.iconFill }} onClick={() => onChange('')} />
            ) : (
              <SearchIcon classes={{ root: styles.iconFill }} />
            )}
            {/*<SearchIcon*/}
            {/*  classes={{*/}
            {/*    root: styles.iconFill,*/}
            {/*  }}*/}
            {/*/>*/}
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
};

export default Search;
