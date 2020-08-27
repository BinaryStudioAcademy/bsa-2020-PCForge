import React from 'react';
import SetupCard, { SetupCardProps } from 'components/SquareSetupCard';
import ButtonCard from '../ButtonCard';

import styles from './styles.module.scss';

interface ICardDisplayProps {
  setups: SetupCardProps[];
  className?: string;
  showButton?: boolean;
}

const CardDisplay: React.FC<ICardDisplayProps> = (props) => {
  const { showButton, setups, className } = props;
 

  const generateKey = (pre: string, index: number) => {
    return `${pre}_${new Date().getTime()}_${index}`;
  };

  return (
        <div>
          {setups.map((setup, index) => {
            return (
              <SetupCard
                id={setup.id}
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
          {showButton && <ButtonCard />}
      </div>
   
  );
};

export default CardDisplay;
