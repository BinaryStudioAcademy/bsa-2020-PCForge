import React from 'react';
import moment from 'moment';
import history from 'browserHistory';
import { useParams } from 'react-router';
import styles from './styles.module.scss';
import RatingBox from 'components/BasicComponents/RatingBox';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import { Cpu } from 'common/models/cpu';
import { Motherboard } from 'common/models/motherboard';
import { Gpu } from 'common/models/gpu';
import { Ram } from 'common/models/ram';
import { TypePowersupplies } from 'common/models/typePowersupplies';
import BasicLink from 'components/BasicComponents/Link';
import Image from 'components/BasicComponents/Image';
import { TypeUser } from 'common/models/typeUser';
import { UserActionTypes } from 'containers/UserPage/logic/actionTypes';
import { UserPageTabs } from 'containers/UserPage/index';

export interface SetupCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  cpu: Cpu;
  gpu: Gpu;
  motherboard: Motherboard;
  powerSupply: TypePowersupplies;
  ram: Ram;
  author: TypeUser;
  createdAt: Date;
  className?: string;
  big?: boolean;
  own?: boolean;
  setTab?: (tab: UserPageTabs) => UserActionTypes;
  deleteUserSetup?: (userId: number, setupId: number) => UserActionTypes;
}

const SetupCard: React.FC<SetupCardProps> = ({
  id,
  image,
  title,
  description,
  cpu,
  gpu,
  motherboard,
  powerSupply,
  ram,
  author,
  big,
  createdAt,
  className,
  own,
  setTab,
  deleteUserSetup,
}) => {
  const { id: _id } = useParams<{ id: string }>();
  const userId = parseInt(_id, 10);

  const setupCreatedAt = moment(createdAt).format('D MMM YYYY');

  const handleCardClick: () => void = () => {
    history.push(`/setup/${id}`);
  };

  const handleDeleteSetup: (e: React.MouseEvent<HTMLElement>) => void = (e) => {
    e!.stopPropagation();

    if (deleteUserSetup && setTab) {
      deleteUserSetup(userId, id);
      setTab(UserPageTabs.Setups);
    }
  };

  let setupStyle = styles.setupCard;
  if (className) {
    setupStyle += ` ${className}`;
  }
  if (big) {
    setupStyle += ` ${styles.bigCard}`;
  } else {
    setupStyle += ` ${styles.withHover}`;
  }

  return (
    <div onClick={handleCardClick} className={setupStyle}>
      <div className={styles.setupImage}>
        <Image src={image} alt="" />
      </div>
      <div className={styles.setupTitle}>{title}</div>

      <div className={styles.createdAt}>
        Created on {setupCreatedAt} {!own && <>by {author.name}</>}
      </div>
      <div className={styles.setupCardRatingBox}>
        <RatingBox ratingValue={5} disabled={false} name={title} />
      </div>

      <div className={styles.setupBack}>
        <div className={styles.textHolder}>
          <div className={styles.setupDescription}>{description}</div>
          <div>CPU: {cpu.name}</div>
          <div>Motherboard: {motherboard.name}</div>
          <div>GPU: {gpu.name}</div>
          <div>RAM: {ram.name}</div>
          <div>Power Supply: {powerSupply.name}</div>
        </div>

        <div className={styles.backBottomWrapper}>
          <Button icon="ArrowForward" buttonType={ButtonType.primary}>
            Find out more
          </Button>
          <div> {own && <BasicLink icon="Delete" onClick={handleDeleteSetup}></BasicLink>}</div>
        </div>
      </div>
    </div>
  );
};

export default SetupCard;
