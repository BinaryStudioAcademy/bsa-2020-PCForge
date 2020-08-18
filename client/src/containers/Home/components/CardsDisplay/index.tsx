import React from 'react';
import SetupCard from './../SetupCard';
import styles from './styles.module.scss';


const CardDisplay: React.FC = () => {
  return (
    <div className={styles.cardDisplay}>
      <SetupCard
        title="My Game Setup 1"
        image="https://www.ricomputerrepair.net/images/open-computer-case.jpg"
        description="a lot of thigns here"
        className="bigCard"
        big
      />
      <SetupCard
        title="My Game Setup 2"
        image="https://www.ricomputerrepair.net/images/open-computer-case.jpg"
        description="a lot of thigns here"
      />
      <SetupCard
        title="My Game Setup 3"
        image="https://www.ricomputerrepair.net/images/open-computer-case.jpg"
        description="a lot of thigns here"
      />
    </div>
  );
};

export default CardDisplay;
