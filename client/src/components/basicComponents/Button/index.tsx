import React from 'react';
import MButton, {ButtonProps} from '@material-ui/core/Button';
import { getIcon } from 'common/helpers/icon.helper';
import styles from './styles.module.scss';

export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary',
    warning = 'warning',
    error = 'error',
}

interface IButtonProps {
    buttonType?: ButtonType,
    icon?: string;
    children?: any;
}


const Button:React.FC<ButtonProps & IButtonProps> = (props) => {
    const classes = [styles.btn];
    let icon = props.icon;
    switch(props.buttonType) {
        case ButtonType.primary:
            classes.push(styles.btnPrimary);
            break;
        case ButtonType.secondary:
            classes.push(styles.btnSecondary);
            break;
        case ButtonType.warning:
            classes.push(styles.btnWarning)
            icon = 'Warning';
            break;
        case ButtonType.error:
            classes.push(styles.btnError);
            icon = 'Error';
            break;
    }
    
    return (
        <MButton
            variant="outlined"
            startIcon={icon ? getIcon(icon) : null}
            className={classes.join(' ')}
            {...props}
        >
            {props.children}
        </MButton>
    )
};

export default Button;