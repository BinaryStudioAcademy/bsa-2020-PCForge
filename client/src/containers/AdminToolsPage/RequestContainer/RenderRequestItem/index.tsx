import React, { useState } from 'react';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import ModalWindow from '../ModalWindow';
import { TypeUsersRequests } from 'common/models/typeUsersRequests';
import styles from './styles.module.scss';
import { UserRequestedType, UserRequestedHardwareType } from 'common/enums/UserRequestedType';

interface IPropsItem {
  item: TypeUsersRequests;
  onDisaproveHandler: (id: number, email: string) => void;
  onApproveHandler: (id: number, email: string) => void;
}

const RenderRequestItem = ({ item, onDisaproveHandler, onApproveHandler }: IPropsItem): JSX.Element => {
  const [displayDetailsOpen, setDisplayDetailsOpen] = useState(false);
  const date = new Date(item.createdAt);

  const showDetails = () => {
    setDisplayDetailsOpen(true);
  };
  const hideDetails = () => {
    setDisplayDetailsOpen(false);
  };
  const handleDetailsWindow = () => {
    displayDetailsOpen ? hideDetails() : showDetails();
  };
  const onDisapprove = () => {
    // update next after changing user Requests API:
    onDisaproveHandler(item.id, item.user.email);
  };
  const onApprove = () => {
    // update next after changing user Requests API:
    onApproveHandler(item.id, item.user.email);
  };
  const itemTitle =
    item.requestedType === UserRequestedType.hardware
      ? `New ${item.requestedHardwareType}`
      : `New ${item.requestedType}`;

  return (
    <div className={styles.requestItem} key={item.id}>
      <div className={styles.requestTitle}>{itemTitle}</div>
      <div className={styles.requestInfo}>{item.requestBody}</div>
      <div className={styles.requestExtraInfoContainer}>
        <div className={styles.requestExtraInfoItem}>{date.toLocaleString()}</div>
        <div className={styles.requestExtraInfoItem}>{item.user.name}</div>
      </div>
      <div className={styles.buttonContainer}>
        {displayDetailsOpen ? <ModalWindow displayInfo={item} onClose={hideDetails} /> : null}
        <Button buttonType={ButtonType.secondary} className={styles.buttonRequest} onClick={handleDetailsWindow}>
          Details
        </Button>
        <Button buttonType={ButtonType.primary} className={styles.buttonRequest} onClick={onApprove}>
          Approve
        </Button>
        <Button buttonType={ButtonType.secondary} className={styles.buttonRequest} onClick={onDisapprove}>
          Disapprove
        </Button>
      </div>
    </div>
  );
};

export default RenderRequestItem;
