import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';

import styles from './styles.module.scss';

export interface IImageListProps {
  data: {
    title: string;
    image: string;
  }[];
  maxItemCount?: number;
}

const ImageList: React.FC<IImageListProps> = ({
  data = [],
  maxItemCount = data.length,
}: IImageListProps): JSX.Element => {
  return (
    <div>
      <GridList cols={2.5}>
        {data.slice(0, maxItemCount).map((tile) => (
          <GridListTile key={tile.image}>
            <img src={tile.image} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
export default ImageList;
