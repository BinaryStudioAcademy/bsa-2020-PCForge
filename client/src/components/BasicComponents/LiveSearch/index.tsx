/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

interface IInputOptions {
  title: string;
}

interface Props {
  items: IInputOptions[];
  onItemSelected: (event: React.ChangeEvent<{}>, value: IInputOptions | null) => void;
  label?: string;
}

const LiveSearch: React.FC<Props> = ({ items, onItemSelected, label = 'Combo box' }) => {
  return (
    <>
      <Autocomplete
        id="combo-box-demo"
        options={items}
        getOptionLabel={(option) => option.title}
        onChange={onItemSelected}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
      />
    </>
  );
};

export default LiveSearch;
