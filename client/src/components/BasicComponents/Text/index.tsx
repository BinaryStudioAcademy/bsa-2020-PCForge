import { Box } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';

interface ITextProps {
  text: string;
  iconPosition?: 'left' | 'right';
  icon?: JSX.Element;
  className?: string;
}

const Text: React.FC<ITextProps> = ({ text, icon = null, className = '', iconPosition = 'left' }) => {
  return (
    <Box className={`${styles.text} ${className}`}>
      {iconPosition === 'left' && icon}
      <Box className={styles.textInner}>{text}</Box>
      {iconPosition === 'right' && icon}
    </Box>
  );
};

export default Text;
