import React from 'react';
import styles from './styles.module.scss';

type PropsType = {
  value: number;
  maxValue?: number;
  type: 'CPU' | 'GPU' | 'RAM';
};

const Tachometer = ({ value, maxValue = 10, type }: PropsType) => {
  const speed = 200 - (value / maxValue) * 140; // magic svg
  const text = Number.isInteger(value) ? value : value.toFixed(1);

  return (
    <div className={styles.tachometer}>
      <svg className={styles.tachometerSvg} viewBox="0 0 110 110">
        <circle className={styles.tachometerBar} cx="55" cy="55" r="44" />
        <circle className={styles.tachometerBorder} cx="55" cy="55" r="38" />
        <circle
          className={styles.tachometerProgress}
          cx="55"
          cy="55"
          r="32"
          strokeDashoffset={speed} // 200 - 60 magic svg
        />
        <foreignObject className={styles.test} width="100%" height="100%">
          <div className={styles.tachometerText}>
            <div>{text}</div>
            <div>{type}</div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default Tachometer;
