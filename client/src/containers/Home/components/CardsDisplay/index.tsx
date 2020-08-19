import React from 'react';
import SetupCard, { SetupCardProps } from './../SetupCard';
import {getIcon} from 'common/helpers/icon.helper';
import styles from './styles.module.scss';

interface ICardDisplayProps {
  setups: SetupCardProps[];
}
const CardDisplay: React.FC<ICardDisplayProps> = (props) => {
  const { setups } = props;
  const topSetup = setups[0];
  const ordinarySetups = setups.filter((setup, index) => {
    return index !== 0;
  });

  return (
    <div className={styles.contentWrapper}>
    <h2 className={styles.buildsHeading}>Most popular builds</h2>
    <div className={styles.cardDisplay}>
      <div className={styles.topSetup}>
        <SetupCard title={topSetup.title} description={topSetup.description} image={topSetup.image} big />
      </div>
      <div className={styles.smallerCards}>
        {ordinarySetups.map((setup, index) => {
          return <SetupCard title={setup.title} description={setup.description} image={setup.image} />;
        })}
        <div className={styles.cardButton}>
        {getIcon('Visibility')}
          <p>Show all computers</p>
          

          {getIcon('ArrowForward')}
        
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardDisplay;
