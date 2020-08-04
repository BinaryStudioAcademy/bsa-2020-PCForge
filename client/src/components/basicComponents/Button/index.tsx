import React from 'react';
import MButton, {ButtonProps} from '@material-ui/core/Button';
import { getIcon } from 'helpers/icon.helper';


interface IButtonProps {
    primary?: boolean;
    secondary?: boolean;
    warning?: boolean;
    error?: boolean;
    icon?: string;
    children?: any;
}


const Button:React.FC<ButtonProps & IButtonProps> = ({primary, secondary, warning, error, icon, children, ...rest}) => {
    return (
        <MButton
            {...rest}
            variant="outlined"
            color={primary?`primary`:( secondary?`secondary`:`default`)}
            startIcon={icon ? getIcon(icon) : null}
        >
            {children}
        </MButton>
    )
};

export default Button;