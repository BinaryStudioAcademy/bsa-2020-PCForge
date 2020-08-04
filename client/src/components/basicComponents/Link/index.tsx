import React from 'react';
import MLink, { LinkProps } from '@material-ui/core/Link';
import { getIcon } from 'helpers/icon.helper';


interface ILinkProps {
    defaultProp?:boolean;
    icon?: string;
    children?:string;
}


const Link:React.FC<LinkProps & ILinkProps> = ({defaultProp, icon, children, ...rest}) => {
    return (
        <MLink
            {...rest}
        >
            {icon && getIcon(icon)}
            {children}
        </MLink>
    )
};

export default Link;