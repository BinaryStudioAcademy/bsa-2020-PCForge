import React from 'react';
import MLink, { LinkProps } from '@material-ui/core/Link';
import { getIcon } from 'common/helpers/icon.helper';
import styles from './styles.module.scss';


interface ILinkProps {
    defaultProp?:boolean;
    icon?: string;
    children?:string;
}


const Link:React.FC<LinkProps & ILinkProps> = (props) => {
    const {defaultProp, icon, children} = props;
    return (
        <MLink
            className={styles.link}
            {...props}
        >
            {icon && getIcon(icon)}
            {children}
        </MLink>
    )
};

export default Link;