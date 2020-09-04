/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { GridList, GridListTile, Tooltip } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Image from 'components/BasicComponents/Image';

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
      '&:hover': {
        opacity: 0.75,
      },
    },
    selected: {
      border: '3px solid',
      borderColor: theme.palette.common.white,
      boxShadow: 'inset 10px 10px 43px 0px rgba(0,0,0,0.75)',
    },
  })
);

interface IImage {
  id: number;
  title: string;
  image: string;
}

export interface IImageListProps {
  data: IImage[];
  maxItemCount?: number;
  onImageSelect: (index: number) => void;
  className?: string;
  defaultSelected?: number;
}

const ImageList: React.FC<IImageListProps> = ({
  data = [],
  maxItemCount = data.length,
  onImageSelect,
  className = '',
  defaultSelected = 0,
}: IImageListProps): JSX.Element => {
  const styles = useStyles();
  const [selected, setSelected] = React.useState<number>(defaultSelected);
  const currentItemCount = data.length;
  const colsCount = Math.min(currentItemCount, maxItemCount);

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

  const onSelect = (image: IImage) => {
    onImageSelect(image.id);
    setSelected(data.findIndex((item) => item.id === image.id));
  };

  return (
    <div className={`${styles.root} ${className}`}>
      <GridList
        cols={Math.max(1, colsCount - 0.5)} // cols={0.5} breaks layout
        className={styles.gridList}
        ref={scrollRef as React.RefObject<HTMLUListElement>}
        spacing={20}
      >
        {data.slice(0, colsCount).map((tile, index) => (
          <Tooltip key={tile.id} title={tile.title} placement="top" arrow>
            <GridListTile
              key={tile.id}
              rows={1}
              classes={{ tile: `${styles.tile} ${index === selected && styles.selected}` }}
              className={styles.tile}
              onClick={() => onSelect(tile)}
            >
              <Image src={tile.image} alt={tile.title} />
            </GridListTile>
          </Tooltip>
        ))}
      </GridList>
    </div>
  );
};
export default ImageList;
