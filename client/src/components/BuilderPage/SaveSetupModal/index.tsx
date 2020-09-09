import React, { FormEvent, useEffect, useState } from 'react';
import Modal from 'components/BasicComponents/Modal';
import Input from 'components/BasicComponents/Input';
import { InputLabel } from '@material-ui/core';
import styles from './styles.module.scss';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import { getLocalSetupObjectForSave } from 'helpers/setupHelper';
import { TypeSetupForPost } from 'containers/BuilderPage/reducer';
import { useDispatch } from 'react-redux';
import { saveSetupRequest } from 'containers/BuilderPage/actions';
import { MAX_IMAGE_SIZE } from 'common/constants';

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
    if (setup?.title) {
      setTitle(setup.title);
    }
    if (setup?.description) {
      setDescription(setup.description);
    }
  }, []);

  const dispatch = useDispatch();

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    if (file.size < MAX_IMAGE_SIZE) {
      setFile(file ? file : null);
      setFileName(file ? file.name : '');
    } else {
      setFileName(`Image must be less than 5Mb bytes`);
    }
  };

  const onChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const getBodyForSaveSetup = () => {
    return {
      ...computerComponents!,
      title,
      description,
      token: localStorage.getItem('access_token')!,
    };
  };

  const handleFileUpload = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(saveSetupRequest(getBodyForSaveSetup(), file!));
    onClose();
  };

  return (
    <Modal open={true}>
      <h2 className={styles.modalTitle}>{computerComponents?.id ? 'Update your Setup' : 'Save your Setup'}</h2>
      <form onSubmit={handleFileUpload} className={styles.body}>
        <div className={styles.fileInputBox}>
          <Button buttonType={ButtonType.primary} className={styles.fileInputButton}>
            <input
              type="file"
              id="uploadFile"
              accept={acceptedTypes.toString()}
              className={styles.fileInputField}
              onChange={onChangeImage}
            />
            <label htmlFor="uploadFile" className={styles.fileInputLabel}>
              Select Image
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
            value={title}
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
            value={description}
          ></textarea>
        </div>
        <div className={styles.buttonsBox}>
          <Button
            type="submit"
            buttonType={ButtonType.primary}
            className={`${styles.button} ${styles.saveButton}`}
            disabled={(file || computerComponents?.image) && title && description ? false : true}
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
