import React from 'react';
import MInput, { InputProps } from '@material-ui/core/Input';
import InputAdornment  from '@material-ui/core/InputAdornment'
import { getIcon } from 'helpers/icon.helper';

interface IInputProps {
  warning?: boolean;
  error?: boolean;
  icon?: string;
}

const Input: React.FC<InputProps & IInputProps> = ({ warning, error, icon, ...rest }) => {
    const adornment = icon ? (<InputAdornment position="start">{getIcon(icon)}</InputAdornment>) : null;

    return (
        <MInput
            {...rest}
            startAdornment={adornment}
        />
    );
};

export default Input;
