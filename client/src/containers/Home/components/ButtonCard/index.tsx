import React from 'react';
import { getIcon } from 'common/helpers/icon.helper';
import styles from './styles.module.scss';

export default function ButtonCard() {
  return (
    <div className={styles.cardButton}>
      {getIcon('Visibility')}
      <p>Show all computers</p>
      {getIcon('ArrowForward')}
    </div>
  );
}
