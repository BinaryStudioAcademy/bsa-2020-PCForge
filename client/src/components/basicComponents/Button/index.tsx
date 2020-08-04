import React from 'react';
import MButton, {ButtonProps} from '@material-ui/core/Button';
import { getIcon } from 'helpers/icon.helper';
import styles from './styles.module.scss';


interface IButtonProps {
    primary?: boolean;
    secondary?: boolean;
    warning?: boolean;
    error?: boolean;
    icon?: string;
    children?: any;
}


const Button:React.FC<ButtonProps & IButtonProps> = ({primary, secondary, warning, error, icon, children, ...rest}) => {
    const classes = [styles.btn]
    if(primary) {
        classes.push(styles['btn-primary'])
    } else if(secondary) {
        classes.push(styles['btn-secondary'])
    } else if(warning) {
        classes.push(styles['btn-warning'])
        icon = 'Warning'
    } else if(error) {
        classes.push(styles['btn-error'])
        icon = 'Error'
    }
    
    return (
        <MButton
            {...rest}
            variant="outlined"
            startIcon={icon ? getIcon(icon) : null}
            className={classes.join(' ')}
        >
            {children}
        </MButton>
    )
};

export default Button;