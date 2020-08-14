/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      maxHeight: '100%',
    },
    gridList: {
      flexWrap: 'nowrap',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      overflow: 'auto',
      cursor: 'drag',
      transform: 'translateZ(0)',
    },
    tile: {
      borderRadius: 50,
    },
  })
);

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
  const styles = useStyles();

  function useHorizontalScroll() {
    const elementRef = React.useRef<HTMLUListElement>();
    React.useEffect(() => {
      const element = elementRef.current as any;
      if (element) {
        const onWheel = (event: any) => {
          event.preventDefault();
          element.scrollTo({
            left: element.scrollLeft + event.deltaY,
            behavior: 'smooth',
          });
        };
        element.addEventListener('wheel', onWheel);
        return () => element.removeEventListener('wheel', onWheel);
      }
    }, []);
    return elementRef;
  }

  const scrollRef = useHorizontalScroll();

  return (
    <div className={styles.root}>
      <GridList
        cols={maxItemCount - 0.5}
        className={styles.gridList}
        ref={scrollRef as React.RefObject<HTMLUListElement>}
        spacing={20}
      >
        {data.slice(0, maxItemCount).map((tile) => (
          <GridListTile key={tile.image} rows={1} classes={{ tile: styles.tile }}>
            <img src={tile.image} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
export default ImageList;
