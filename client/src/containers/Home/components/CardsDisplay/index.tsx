import React from 'react';
import SetupCard, { SetupCardProps } from 'components/SquareSetupCard';
import ButtonCard from '../ButtonCard';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface ICardDisplayProps {
  setups: SetupCardProps[];
  className?: string;
  showButton?: boolean;
  big?: boolean;
}

const CardDisplay: React.FC<ICardDisplayProps> = (props) => {
  const { showButton, setups, className, big } = props;

  const generateKey = (pre: string, index: number) => {
    return `${pre}_${new Date().getTime()}_${index}`;
  };

  return (
    <div>
      {setups.map((setup, index) => {
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
            author={setup.author}
            key={generateKey(setup.title, index)}
            big={big}
          />
        );
      })}
      {showButton && (
        <Link className={styles.buttonLinkStyle} to="/setups">
          <ButtonCard />
        </Link>
      )}
    </div>
  );
};

export default CardDisplay;
