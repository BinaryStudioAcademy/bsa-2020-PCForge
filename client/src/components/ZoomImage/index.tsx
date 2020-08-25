import React, { useState, MouseEvent } from 'react';
import styles from './styles.module.scss';

interface Props {
  src: string;
  alt: string;
  fallbackImage?: string;
  rootClassName?: string;
}

const ZoomImage: React.FC<Props> = (props): JSX.Element => {
  const { src, alt, rootClassName } = props;

  const [imgPosition, setPosition] = useState('0% 0%');
  const [defaultImage, setDefaultImage] = useState<string | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = (e.target as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition(`${x}% ${y}%`);
  };

  const onImageLoadError = () => {
    if (!defaultImage && props.fallbackImage) {
      setDefaultImage(props.fallbackImage!);
    }
  };
  return (
    <figure
      className={[styles.imageWrapper, rootClassName ? rootClassName : ''].join(' ')}
      onMouseMove={handleMouseMove}
      style={{ backgroundPosition: imgPosition, backgroundImage: `url(${defaultImage || src})` }}
    >
      <img src={defaultImage || src} alt={alt} className={styles.image} onError={onImageLoadError} />
    </figure>
  );
};

export default ZoomImage;
