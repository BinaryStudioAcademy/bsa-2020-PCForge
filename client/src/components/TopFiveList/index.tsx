import React from 'react';
import classes from './styles.module.scss';
import { ConnectedProps, connect } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import Image from 'components/BasicComponents/Image';

interface I_Info_Item {
  title: string;
  description: string;
  image: string;
  id: string;
  date?: string;
}

interface I_Props {
  info: Array<I_Info_Item>;
}
//Add props types, when will we have props
// const TopFiveList:React.FC<I_Info_Item> = () => {
const TopFiveList: React.FC = () => {
  //Remove const info it when we will have props
  const info = [
    {
      title: 'Ultra fast setup #1',
      description: 'This is one of tre best setup for hard gaming',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBrDy91gTXsOI0FK4Tnh6ZSsKHu-kjRafm1OT-sbx3d5zqgIDHNeI92mgScR_PPIji2E1KUs6G&usqp=CAc',
      id: '1',
    },
    {
      title: 'Ultra fast setup #2',
      description: 'This setup can run all games',
      image: 'https://images-na.ssl-images-amazon.com/images/I/61QZtoddT-L._AC_UL160_SR160,160_.jpg',
      id: '2',
    },
    {
      title: 'Ultra fast setup #3',
      description: 'With this setup you can go to space',
      image:
        'https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/A13V1IB3VIYZZH/AIAOKQBMTXAP/0e03f4e5-aa77-4364-89b8-a1f15ea83c6b._CR0,0,300,300_PT0_SX300__.jpg',
      id: '3',
    },
    {
      title: 'Ultra fast setup #4',
      description: 'This computer is faster than Lamborghini',
      image:
        'https://www.newtechno.fr/newtechno/4939-large_default/ordinateur-gamer-msi-aegis-ti3-vr7rf-sli-046eu-4719072519612.jpg',
      id: '4',
    },
    {
      title: 'Ultra fast setup #5',
      description: 'Best setup for Bitcoin mining',
      image:
        'https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/A13V1IB3VIYZZH/AIAOKQBMTXAP/0e03f4e5-aa77-4364-89b8-a1f15ea83c6b._CR0,0,300,300_PT0_SX300__.jpg',
      id: '5',
    },
  ];

  const createTopFiveListItem = () => {
    return info.map((item) => {
      return (
        <div key={item.id} className={classes.itemWrapper}>
          <div className={classes.item}>
            <Image src={item.image} alt={item.title} className={classes.itemImage} />
            <div className={classes.itemText}>
              <h5 className={classes.itemTextTitle}>{item.title}</h5>
              <p className={classes.itemTextDescription}>{item.description}</p>
              {/* {item.date ? <p className={classes.itemTextDate}>{item.date}</p> : null} */}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.topFiveList}>
      <h4 className={classes.header}>Top Setups</h4>
      {createTopFiveListItem()}
    </div>
  );
};

export default TopFiveList;
