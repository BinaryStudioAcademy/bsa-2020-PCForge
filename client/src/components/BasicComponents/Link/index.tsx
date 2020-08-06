import React from 'react';
import MLink, { LinkProps } from '@material-ui/core/Link';
import { getIcon } from 'common/helpers/icon.helper';
import styles from './styles.module.scss';

interface ILinkProps {
  icon?: string;
}

const Link: React.FC<LinkProps & ILinkProps> = (props) => {
  const { icon, children, className, ...restProps } = props;
  const linkClassName = styles.link + (className ? ` ${className}` : '');

  return (
    <MLink className={linkClassName} {...restProps}>
      {icon && getIcon(icon)}
      {children}
    </MLink>
  );
};

export default Link;
