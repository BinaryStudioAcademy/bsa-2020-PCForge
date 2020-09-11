import React from 'react';
import classes from './styles.module.scss';
import { ConnectedProps, connect } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import Image from 'components/BasicComponents/Image';
import { Link, Route } from 'react-router-dom';

interface I_Info_Item {
  title: string;
}

const TopFiveList: React.FC<PropsFromRedux & I_Info_Item> = ({ setups, title }) => {
  const createTopFiveListItem = () => {
    return setups.map((item) => {
      return (
        <div key={item.id} className={classes.itemWrapper}>
          <Link className={classes.item} to={`${title === 'Games' ? 'games' : 'setup'}/${item.id}`}>
            <Image src={item.image} alt={item.title} className={classes.itemImage} />
            <div className={classes.itemText}>
              <h5 className={classes.itemTextTitle}>{item.title}</h5>
              <p className={classes.itemTextDescription}>{item.description}</p>
              {/* {item.date ? <p className={classes.itemTextDate}>{item.date}</p> : null} */}
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className={classes.topFiveList}>
      <h4 className={classes.header}>
        Top {setups.length}
        {` ${title}`}
      </h4>
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
