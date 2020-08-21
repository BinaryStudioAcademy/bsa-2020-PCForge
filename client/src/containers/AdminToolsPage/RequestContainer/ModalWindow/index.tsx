import React from 'react';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import { TypeUsersRequests } from 'common/models/typeUsersRequests';
import Modal from 'components/BasicComponents/Modal';
import styles from './styles.module.scss';

interface IDisplayModel {
  displayInfo: TypeUsersRequests;
  onClose: () => void;
}
const ModalWindow = ({ displayInfo, onClose }: IDisplayModel): JSX.Element => {
  const date = new Date(displayInfo.createdAt);

  return (
    <Modal open={true}>
      <div className={styles.requestTitle}>{`New ${displayInfo.requestedType} request`}</div>
      <div className={styles.requestMetaData}>{`by ${displayInfo.userId} from ${date.toLocaleString()}`}</div>
      <div className={styles.requestTitle}>{'Request message: '}</div>
      <div className={styles.requestBody}>{displayInfo.requestBody}</div>
      <div className={styles.buttonContainer}>
        <Button buttonType={ButtonType.secondary} className={styles.buttonOk} onClick={onClose}>
          Ok
        </Button>
      </div>
    </Modal>
  );
};

export default ModalWindow;
