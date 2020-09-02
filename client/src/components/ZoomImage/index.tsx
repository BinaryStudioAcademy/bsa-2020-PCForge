import React, { useState, MouseEvent } from 'react';
import Zoom from 'react-medium-image-zoom';
import { Magnifier, SideBySideMagnifier } from 'react-image-magnifiers';
import styles from './styles.module.scss';

interface Props {
  src: string;
  alt: string;
  fallbackImage?: string;
  rootClassName?: string;
}

const ZoomImage: React.FC<Props> = (props): JSX.Element => {
  const { src, alt, rootClassName } = props;

  return (
    <SideBySideMagnifier
      className={[styles.imageWrapper, rootClassName ? rootClassName : ''].join(' ')}
      imageSrc={src}
      imageAlt={alt}
      overlayBackgroundColor={'#3C444D'}
      fillAvailableSpace={true}
      alwaysInPlace={true}
    ></SideBySideMagnifier>
  );
};

export default ZoomImage;
