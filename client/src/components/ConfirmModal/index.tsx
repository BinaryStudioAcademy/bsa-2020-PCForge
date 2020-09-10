import React from 'react';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Modal from 'components/BasicComponents/Modal';
import styles from './styles.module.scss';

interface IConfirmModel {
  question: string;
  onApprove: (id: number) => void;
  id: number;
  onCancel: () => void;
}

const ConfirmModalWindow = ({ question, onApprove, onCancel, id }: IConfirmModel): JSX.Element => {
  return (
    <Modal open={true}>
      <div className={styles.requestBody}>{question}</div>
      <div className={styles.buttonsContainer}>
        <div className={styles.buttonWrapper}>
          <Button buttonType={ButtonType.primary} onClick={() => onApprove(id)}>
            Delete
          </Button>
        </div>
        <div className={styles.buttonWrapper}>
          <Button buttonType={ButtonType.secondary} className={styles.buttonOk} onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModalWindow;
