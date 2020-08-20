import React, { useState, useEffect, FormEvent } from 'react';
import Modal from 'components/BasicComponents/Modal';
import Input from 'components/BasicComponents/Input';
import { InputLabel } from '@material-ui/core';
import styles from './styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import { getLocalSetupObjectForSave } from 'helpers/setupHelper';
import { TypeSetupForPost } from 'containers/BuilderPage/reducer';

interface IProps {
  onClose: () => void;
}

const acceptedTypes: string[] = ['image/png', 'image/jpg', 'image/jpeg'];

const SaveSetupModal: React.FC<IProps> = ({ onClose }) => {
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [computerComponents, setComputerComponents] = useState<TypeSetupForPost | null>(null);

  useEffect(() => {
    const setup = getLocalSetupObjectForSave();
    setComputerComponents(setup);
  }, []);

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files![0] ? event.target.files![0] : null);
    setFileName(event.target.files![0] ? event.target.files![0].name : '');
  };

  const onChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const sendRequest = () => {
    const setupForSave = {
      ...computerComponents,
      title,
      description,
      image: file!.name,
      authorId: 4,
    };
    console.log(file);
    console.log('sendRequest -> setupForSave', setupForSave);
    return setupForSave;
  };

  const handleFileUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file!);
    console.log('handleFileUpload -> formData', formData);
    const response = await fetch('http://127.0.0.1:5001/api/setups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendRequest()),
    });
  };

  return (
    <Modal open={true}>
      <h2 className={styles.modalTitle}>Save your Setup</h2>
      <form onSubmit={handleFileUpload} className={styles.body}>
        <div className={styles.fileInputBox}>
          <Button buttonType={ButtonType.primary} className={styles.fileInputButton}>
            <input
              type="file"
              id="uploadFile"
              accept={acceptedTypes.toString()}
              className={styles.fileInputField}
              onChange={onChangeImage}
            ></input>
            <label htmlFor="uploadFile" className={styles.fileInputLabel}>
              Chose File
            </label>
          </Button>
          <span className={styles.fileName}>{fileName}</span>
        </div>
        <div className={styles.formItem}>
          <InputLabel htmlFor="setup_title" className={styles.inputTitle}>
            Title
          </InputLabel>
          <Input
            id="setup_title"
            name="setup_title"
            className={styles.titleInput}
            placeholder="Title"
            type="text"
            onChange={onChangeTitle}
            required
          />
        </div>
        <div>
          <InputLabel htmlFor="setup_description" className={styles.inputTitle}>
            Description
          </InputLabel>
          <textarea
            className={styles.textArea}
            maxLength={500}
            id="setup_description"
            onChange={onChangeDescription}
          ></textarea>
        </div>
        <div className={styles.buttonsBox}>
          <Button
            type="submit"
            buttonType={ButtonType.primary}
            className={`${styles.button} ${styles.saveButton}`}
            disabled={file && title && description ? false : true}
          >
            Save Setup
          </Button>
          <Button buttonType={ButtonType.secondary} className={styles.button} onClick={onClose}>
            Close
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default SaveSetupModal;