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

const TopFiveList: React.FC<PropsFromRedux> = ({ setups }) => {
  const createTopFiveListItem = () => {
    return setups.map((item) => {
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
      <h4 className={classes.header}>Top {setups.length} Setups</h4>
      {createTopFiveListItem()}
    </div>
  );
};

const mapState = (state: RootState) => ({
  setups: state.setups.topSetups,
});

const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TopFiveList);
