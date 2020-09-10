import React from 'react';
import styles from './styles.module.scss';

const Title: React.FC = () => {
  return (
    <div className={styles.titleContainer}>
      <h1>PCForge</h1>
      <h3>Hand-Forged Gaming Setups</h3>
    </div>
  );
};

export default Title;
