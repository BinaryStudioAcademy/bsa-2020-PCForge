import React from 'react';
import styles from './styles.module.scss';

type PropsType = {
  value: number;
  maxValue?: number;
  type: 'CPU' | 'GPU' | 'RAM' | string;
  className?: string;
};

const ColouredTachometer = ({ value, maxValue = 10, type, className = '' }: PropsType): JSX.Element => {
  value = Math.min(value, maxValue);
  const speed = 200 - (value / maxValue) * 140; // magic svg
  const text = Number.isInteger(value) ? value : value.toFixed(1);

  function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    const d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');

    return d;
  }

  return (
    <div className={`${styles.tachometer} ${className}`}>
      <svg className={styles.tachometerSvg} viewBox="0 0 110 110">
        <path id="1" d={describeArc(55, 55, 44, -145, -75)} className={styles.redArc} />
        <path id="2" d={describeArc(55, 55, 44, -70, -2.5)} className={styles.orangeArc} />
        <path id="3" d={describeArc(55, 55, 44, 2.5, 70)} className={styles.yellowArc} />
        <path id="4" d={describeArc(55, 55, 44, 75, 145)} className={styles.greenArc} />
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

export default ColouredTachometer;
