import React, { useState, MouseEvent } from 'react';
import styles from './styles.module.scss';

interface Props {
  src: string;
  alt: string;
  rootClassName?: string;
}

const ZoomImage: React.FC<Props> = (props): JSX.Element => {
  const { src, alt, rootClassName } = props;

  const [imgPosition, setPosition] = useState('0% 0%');

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = (e.target as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition(`${x}% ${y}%`);
  };

  return (
    <figure
      className={[styles.imageWrapper, rootClassName ? rootClassName : ''].join(' ')}
      onMouseMove={handleMouseMove}
      style={{ backgroundPosition: imgPosition, backgroundImage: `url(${src})` }}
    >
      <img src={src} alt={alt} className={styles.image} />
    </figure>
  );
};

export default ZoomImage;
