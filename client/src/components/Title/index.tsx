import React from 'react';

import styles from './styles.module.scss';

type Props = { title: string; subtitle?: string };
const Title = ({ title, subtitle }: Props) => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>{title}</h2>
    {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
  </div>
);

export default Title;
