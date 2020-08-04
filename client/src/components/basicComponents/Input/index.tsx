import React from 'react';
import MTextField, { TextFieldProps } from '@material-ui/core/TextField';
// import { InputProps } from '@material-ui/core/Input';
import InputAdornment  from '@material-ui/core/InputAdornment'
import { getIcon } from 'common/helpers/icon.helper';
import styles from './styles.module.scss';

export enum InputType {
    warning = 'warning',
    error = 'error',
}

interface IInputProps {
  inputType?: InputType,
  icon?: string;
}

const Input: React.FC<TextFieldProps & IInputProps> = (props) => {
    const classes = [styles.input]
    let icon = props.icon;

    switch(props.inputType) {
        case InputType.warning:
            classes.push(styles['inputWarning'])
            icon = 'Warning'
            break;
        case InputType.error:
            classes.push(styles['inputError'])
            icon = 'Error'
    }

    const adornment = icon ? (<InputAdornment position="start">{getIcon(icon)}</InputAdornment>) : null;

    return (
        <MTextField
            InputProps={{startAdornment: (adornment)}}
            className={classes.join(' ')}
            {...props}
        />
    );
};

export default Input;
