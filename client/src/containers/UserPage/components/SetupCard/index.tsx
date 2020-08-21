// import React from 'react';
// import styles from './styles.module.scss';
// import Button, { ButtonType } from 'components/BasicComponents/Button';

// export interface SetupCardProps {
//   image: string;
//   title: string;
//   description?: string;
//   className?: string;
// }

// const SetupCard: React.FC<SetupCardProps> = ({ image, title, description, className }) => {
//   const setupStyle = styles.setupCard + (` ${className}` || '');
//   return (
//     <div className={setupStyle}>
//       <div className={styles.setupTitle}>{title}</div>
//       <div className={styles.setupImage}>
//         <img src={image} alt="" />
//       </div>
//       <div className={styles.setupDescription}>{description}</div>
//       <Button icon="Build" buttonType={ButtonType.secondary}>
//         Go to Setup
//       </Button>
//     </div>
//   );
// };

// export default SetupCard;


import React from 'react';
import styles from './styles.module.scss';
import RatingBox from 'components/RatingBox';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import { Cpu } from 'common/models/cpu';
import { Motherboard } from 'common/models/motherboard';
import { Gpu } from 'common/models/gpu';
import { Ram } from 'common/models/ram';
import { TypePowersupplies } from 'common/models/typePowersupplies';

export interface SetupCardProps {
  image: string;
  title: string;
  description: string;
  cpu: Cpu;
  gpu: Gpu;
  motherboard: Motherboard;
  powerSupply: TypePowersupplies;
  ram: Ram;
  big?: boolean;
  className?: string;
}

const SetupCard: React.FC<SetupCardProps> = ({
  image,
  title,
  description,
  cpu,
  gpu,
  motherboard,
  powerSupply,
  ram,
  big,
  className,
}) => {
  let setupStyle = styles.setupCard;
  if (className) {
    setupStyle += ` ${className}`;
  }
  if (big) {
    setupStyle += ` ${styles.bigCard}`;
  }

  return (
    <div className={setupStyle}>
      <div className={styles.setupImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.setupTitle}>{title}</div>
      <RatingBox ratingValue={5} disabled={false} name={title} />

      <div className={styles.setupBack}>
        <div className={styles.textHolder}>
          <div className={styles.setupDescription}>{description}</div>
          <div>CPU: {cpu.name}</div>
          <div>Motherboard: {motherboard.name}</div>
          <div>GPU: {gpu.name}</div>
          <div>RAM: {ram.name}</div>
          <div>Power Supply: {powerSupply.name}</div>
        </div>

        <Button icon="ArrowForward" buttonType={ButtonType.primary}>
          Find Out More
        </Button>
      </div>
    </div>
  );
};

export default SetupCard;
