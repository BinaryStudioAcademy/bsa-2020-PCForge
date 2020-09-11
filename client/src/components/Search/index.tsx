import React, { ReactElement } from 'react';
import { FormControl, OutlinedInput, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import styles from './index.module.scss';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onSelect?: (event: React.FocusEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  className?: string;
};
const Search = ({
  value,
  onChange,
  autoComplete = 'on',
  className = '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSelect = (event: React.ChangeEvent<HTMLInputElement>) => {},
}: Props): ReactElement => {
  return (
    <FormControl variant="outlined">
      <OutlinedInput
        autoComplete={autoComplete}
        className={className}
        classes={{
          root: styles.container,
        }}
        placeholder="Search"
        id="outlined-adornment-weight"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onSelect}
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
};

export default Search;
