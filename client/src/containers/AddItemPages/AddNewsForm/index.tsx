import React, { useState, useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import InputForm from 'components/BasicComponents/InputForm';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Alert, { AlertType } from 'components/BasicComponents/Alert';
import styles from './styles.module.scss';
import emptyImage from 'assets/images/emptyImage.jpg';
import { TypeAddNews } from 'common/models/typeNews';

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'redux/rootReducer';
import * as actions from './actions';
import * as alert from 'common/services/AlertService/alert.service';
import * as notification from 'common/services/notificationService';
import { NewsFormAction, NewsFormActionTypes, NewsFormState } from './actionTypes';

const theme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        fontSize: '10px',
        lineHeight: '18px',
        color: '#cbcfd4',
      },
    },
    MuiInputBase: {
      input: {
        padding: '5',
      },
    },
  },
});

interface IPropsAddNewsForm {
  state: NewsFormState;
  createNews: (news: TypeAddNews, imageData: Blob) => NewsFormAction;
  loadCreatedNews: (title: string) => NewsFormAction;
  clearStateValues: () => NewsFormAction;
  goBack: () => void;
}

const AddNewsForm = (props: IPropsAddNewsForm): JSX.Element => {
  const { goBack, createNews, clearStateValues } = props;

  const [image, setImage] = useState(emptyImage);
  const inputRef = React.createRef<HTMLInputElement>();
  const imageInputRef = React.createRef<HTMLInputElement>();

  const [validationError, setValidationError] = useState<string | null>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    clearStateValues();
    inputRef.current?.focus();
  }, []);

  const handleChangeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onPublish = () => {
    const imageData = (imageInputRef.current?.files && imageInputRef.current?.files[0]) || undefined;
    if (!title) {
      setValidationError('Error: Please enter news title');
      return;
    }
    if (!description) {
      setValidationError('Error: Please fill news description');
      return;
    }
    if (!imageData) {
      setValidationError('Error: Please upload image');
      return;
    }

    const news: TypeAddNews = {
      title,
      content: description,
    };
    createNews(news, imageData);
  };
  const onCancel = () => {
    clearStateValues();
    goBack();
  };

  const setInitialFormValues = () => {
    setImage(emptyImage);
    setValidationError(null);
    setTitle('');
    setDescription('');
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleChangeDecription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  let notificationMessage: string | undefined = undefined;
  let notificationType: AlertType | undefined = undefined;
  if (validationError) {
    notificationMessage = validationError;
    notificationType = AlertType.error;
  } else if (props.state.errorMessage) {
    notificationMessage = `Error: ${props.state.errorMessage}`;
    notificationType = props.state.alertType;
  } else if (props.state.title) {
    notification.success(`News ${props.state.title} has been created`);
    clearStateValues();
    if (title) setInitialFormValues();
  }

  return (
    <div className={styles.contentMain}>
      <div className={styles.leftContent}>
        <div className={styles.formFields}>
          {notificationMessage && <Alert alertType={notificationType}>{notificationMessage}</Alert>}
          <ThemeProvider theme={theme}>
            <div className={styles.inputItem}>
              <InputForm
                name={'name'}
                inputLabel={'Title'}
                type="text"
                placeholder="Input a title of news"
                onChange={handleChangeTitle}
                value={title}
                required
              />
            </div>
            <div className={styles.inputItem}>
              <InputForm
                name={'description'}
                inputLabel={'Description'}
                type="text"
                placeholder={`Input a description`}
                onChange={handleChangeDecription}
                value={description}
                multiline
                rowsMax={8}
                rows={4}
              />
            </div>
          </ThemeProvider>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonWrapper}>
            <Button buttonType={ButtonType.primary} onClick={onPublish}>
              Publish
            </Button>
          </div>
          <div className={styles.buttonWrapper}>
            <Button buttonType={ButtonType.secondary} onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.imageUpload}>
          <img src={image || emptyImage} alt="add-item-icon" />
          <input
            type="file"
            id="imageInput"
            name="image"
            accept="image/*"
            ref={imageInputRef}
            onChange={handleChangeImage}
            hidden
          />
          <Button
            buttonType={ButtonType.secondary}
            className={styles.imageButton}
            onClick={() => imageInputRef.current?.click()}
          >
            Select Image
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  state: state.newsForm,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddNewsForm);
