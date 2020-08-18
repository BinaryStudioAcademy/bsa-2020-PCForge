import React from 'react';
import styles from './styles.module.scss';
import { HardwareTypes } from 'common/enums/AdminTools/HardwareTypes';
import ListItem from '@material-ui/core/ListItem';
import Button, { ButtonType } from 'components/BasicComponents/Button';

interface IRequest {
  id: number;
  name: string;
  hardwareType?: HardwareTypes;
  game?: boolean;
  data: Date;
  userName: string;
}

const getRequests = (): Array<IRequest> => {
  return [
    {
      id: 1,
      name: 'MSI B450-A PRO MAX NEW',
      hardwareType: HardwareTypes.Motherboard,
      data: new Date(),
      userName: 'Bill',
    },
    {
      id: 2,
      name: 'FirePro 3D V5800',
      hardwareType: HardwareTypes.GPU,
      data: new Date(),
      userName: 'Bond 007',
    },
    {
      id: 3,
      name: 'Angry birds',
      game: true,
      data: new Date(),
      userName: 'Alevtina Petrovna',
    },
  ];
};

interface Props {
  item: IRequest;
}

const RenderRequestItem: React.FC<IRequest> = (item) => {
  return (
    <div className={styles.requestItem} key={item.id}>
      <div className={styles.requestTitle}> {item.game ? `New Game` : `New ${item.hardwareType}`}</div>
      <div className={styles.requestInfo}>{item.name}</div>
      <div className={styles.requestExtraInfoContainer}>
        <div className={styles.requestExtraInfoItem}>{item.data.toLocaleDateString()}</div>
        <div className={styles.requestExtraInfoItem}>{item.userName}</div>
      </div>
      <div className={styles.buttonContainer}>
        <Button buttonType={ButtonType.secondary} className={styles.buttonRequest}>
          Details
        </Button>
        <Button buttonType={ButtonType.primary} className={styles.buttonRequest}>
          Approve
        </Button>
        <Button buttonType={ButtonType.secondary} className={styles.buttonRequest}>
          Disapprove
        </Button>
      </div>
    </div>
  );
};

const RequestContaner: React.FC = () => {
  const requests: Array<IRequest> = getRequests(); // await
  return (
    <div>
      <h2 className={styles.requestHeader}>Recent Requests</h2>
      <div className={styles.requestContaner}>
        {requests.map((item: IRequest, key) => (
          <ListItem key={`${item.id}-request-item`} className={styles.listItem}>
            {RenderRequestItem(item)}
            {/* <RenderRequestItem item={item} /> */}
          </ListItem>
        ))}
      </div>
    </div>
  );
};

export default RequestContaner;
