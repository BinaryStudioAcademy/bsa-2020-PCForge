/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Autocomplete, AutocompleteInputChangeReason } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

interface IInputOptions {
  title: string;
}

interface Props {
  items: IInputOptions[];
  onItemSelected: (value: IInputOptions) => void;
  onInputChanged: (value: string) => void;
  label?: string;
}

const LiveSearch: React.FC<Props> = ({ items, onItemSelected, onInputChanged, label = 'Combo box' }) => {
  const onSelected = (event: React.ChangeEvent<{}>, value: IInputOptions | null) => {
    if (!value) return;
    onItemSelected(value);
  };

  const onInputChange = (event: React.ChangeEvent<{}>, value: string, reason: AutocompleteInputChangeReason) => {
    if (reason === 'input') onInputChanged(value);
  };

  return (
    <>
      <Autocomplete
        id="combo-box-demo"
        options={items}
        getOptionLabel={(option) => option.title}
        onChange={onSelected}
        onInputChange={onInputChange}
        style={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
      />
    </>
  );
};

export default LiveSearch;
