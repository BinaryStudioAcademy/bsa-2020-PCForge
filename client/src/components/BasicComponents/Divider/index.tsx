import React from 'react';
import { Divider as MDivider, DividerProps } from '@material-ui/core/';
import styles from 'components/BasicComponents/Divider/styles.module.scss';

const Divider: React.FC<DividerProps> = (props): JSX.Element => {
  const { className, variant } = props;
  const classes = className ? [styles.divider, className].join(' ') : styles.divider;
  return <MDivider className={classes} variant={variant || 'fullWidth'} {...props} />;
};

export default Divider;
