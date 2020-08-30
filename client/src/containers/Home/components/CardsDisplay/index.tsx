import React from 'react';
import SetupCard, { SetupCardProps } from 'components/SquareSetupCard';
import { getIcon } from 'common/helpers/icon.helper';
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

  const generateKey = (pre: string, index: number) => {
    return `${pre}_${new Date().getTime()}_${index}`;
  };

  return (
    <div className={styles.contentWrapper}>
      <h2 className={styles.buildsHeading}>Most popular builds</h2>
      <div className={styles.cardDisplay}>
        <div className={styles.topSetup}>
          <SetupCard
            id={topSetup.id}
            createdAt={topSetup.createdAt}
            title={topSetup.title}
            description={topSetup.description}
            image={topSetup.image}
            cpu={topSetup.cpu}
            gpu={topSetup.gpu}
            motherboard={topSetup.motherboard}
            ram={topSetup.ram}
            powerSupply={topSetup.powerSupply}
            big
            key={generateKey(topSetup.title, 0)}
          />
        </div>
        <div className={styles.smallerCards}>
          {ordinarySetups.map((setup, index) => {
            return (
              <SetupCard
                id={setup.id}
                createdAt={setup.createdAt}
                title={setup.title}
                description={setup.description}
                cpu={setup.cpu}
                gpu={setup.gpu}
                motherboard={setup.motherboard}
                ram={setup.ram}
                image={setup.image}
                powerSupply={setup.powerSupply}
                key={generateKey(setup.title, index)}
              />
            );
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
