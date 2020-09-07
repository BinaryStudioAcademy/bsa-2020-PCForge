import React, { useState, useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { GameFields } from 'common/enums/AdminTools/GameFields';
import InputForm from 'components/BasicComponents/InputForm';
import InputBasedSelect from 'components/BasicComponents/InputBasedSelect';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Alert, { AlertType } from 'components/BasicComponents/Alert';
import styles from './styles.module.scss';
import { GameCreationAttributes } from 'common/models/game';
import emptyImage from 'assets/images/emptyImage.jpg';

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'redux/rootReducer';
import * as actions from './actions';
import * as notification from 'common/services/notificationService';
import {
  GameFormAction,
  GameFormState,
  IHardwareFilter,
  GameFormActions,
  typesHardware,
  typesField,
} from './actionTypes';

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
        padding: '0',
      },
    },
  },
});

interface IPropsAddGameForm {
  state: GameFormState;
  getAllSelectsInitialValues: () => GameFormAction;
  uploadMoreItems: (payload: IHardwareFilter) => GameFormAction;
  createGame: (game: GameCreationAttributes, imageData: Blob) => GameFormAction;
  loadCreatedGame: (gameName: string) => GameFormAction;
  clearStateValues: () => GameFormAction;
  goBack: () => void;
}

const AddGameForm = (props: IPropsAddGameForm): JSX.Element => {
  const { goBack, getAllSelectsInitialValues, uploadMoreItems, createGame, clearStateValues } = props;

  const [image, setImage] = useState(emptyImage);
  const inputRef = React.createRef<HTMLInputElement>();
  const imageInputRef = React.createRef<HTMLInputElement>();

  const [validationError, setValidationError] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState<number | string>('');
  const [recCPU, setRecCPU] = useState<number>();
  const [recGPU, setRecGPU] = useState<number>();
  const [minCPU, setMinCPU] = useState<number>();
  const [minGPU, setMinGPU] = useState<number>();
  const [recRamSize, setRecRAMSize] = useState<number | null>(null);
  const [minRamSize, setMinRAMSize] = useState<number | null>(null);

  useEffect(() => {
    clearStateValues();
    getAllSelectsInitialValues();
    inputRef.current?.focus();
  }, []);

  const handleChangeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onPublish = () => {
    // validate intered values
    const imageData = (imageInputRef.current?.files && imageInputRef.current?.files[0]) || undefined;
    if (!name || !year || !description || !recRamSize || !minRamSize || !recCPU || !minCPU || !recGPU || !minGPU) {
      setValidationError('Error: Please choose hardware components');
      return;
    }
    if (!imageData) {
      setValidationError('Error: Please upload image');
      return;
    }
    if (+minRamSize > +recRamSize) {
      setValidationError('Error: Minimal RAM size can not be bigger than recommended RAM size');
      return;
    } else setValidationError(null);

    const game: GameCreationAttributes = {
      name,
      year: year as number,
      description,
      recommendedRamSize: +recRamSize,
      minimalRamSize: +minRamSize,
      recommendedCpuId: recCPU as number,
      minimalCpuId: minCPU as number,
      recommendedGpuId: recGPU as number,
      minimalGpuId: recGPU as number,
    };
    createGame(game, imageData);
  };
  const onCancel = () => {
    clearStateValues();
    goBack();
  };

  const setInitialFormValues = () => {
    setImage(emptyImage);
    setValidationError(null);
    setName('');
    setDescription('');
    setYear('');
    // const [recCPU, setRecCPU] = useState<number>();
    // const [recGPU, setRecGPU] = useState<number>();
    // const [minCPU, setMinCPU] = useState<number>();
    // const [minGPU, setMinGPU] = useState<number>();
    setRecRAMSize(null);
    setMinRAMSize(null);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeDecription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const handleChangeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };
  const handleChangeRecRAMSize = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRecRAMSize(event.target.value as number);
  };
  const handleChangeMinRAMSize = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMinRAMSize(event.target.value as number);
  };

  const createUploadMoreItems = (typeHardware: typesHardware, typeField: typesField, typeAction: string) => {
    let offset = 0;
    if (typeField === typesField.min)
      offset = typeHardware === typesHardware.cpu ? props.state.minCPUList.length : props.state.minGPUList.length;
    if (typeField === typesField.rec)
      offset = typeHardware === typesHardware.cpu ? props.state.recCPUList.length : props.state.recGPUList.length;
    return function ({ value, itemCount = offset }: { value: string; itemCount?: number }) {
      const filter: IHardwareFilter = { offset: itemCount, name: value, typeHardware, typeAction };
      uploadMoreItems(filter);
    };
  };

  let notificationMessage: string | undefined = undefined;
  let notificationType: AlertType | undefined = undefined;
  if (validationError) {
    notificationMessage = validationError;
    notificationType = AlertType.error;
  } else if (props.state.errorMessage) {
    notificationMessage = `Error: ${props.state.errorMessage}`;
    notificationType = props.state.alertType;
  } else if (props.state.gameName) {
    notification.success(`Game ${props.state.gameName} has been created`);
    getAllSelectsInitialValues();
    clearStateValues();
    if (name) setInitialFormValues();
  }

  return (
    <div className={styles.contentMain}>
      <div className={styles.leftContent}>
        <div className={styles.formFields}>
          {notificationMessage && <Alert alertType={notificationType}>{notificationMessage}</Alert>}
          <ThemeProvider theme={theme}>
            <div className={styles.inputItem}>
              <InputForm
                name={GameFields.Name}
                inputLabel={GameFields.Name}
                type="text"
                placeholder="Input a name of a game"
                onChange={handleChangeName}
                value={name}
                required
              />
            </div>
            <div className={styles.inputItem}>
              <InputForm
                name={GameFields.Description}
                inputLabel={GameFields.Description}
                type="text"
                placeholder={`Input a ${GameFields.Description}`}
                onChange={handleChangeDecription}
                value={description}
                multiline
                rowsMax={8}
                rows={4}
              />
            </div>
            <div className={styles.inputItem}>
              <InputForm
                name={GameFields.Year}
                inputLabel={GameFields.Year}
                type="number"
                placeholder={`Input a ${GameFields.Year}`}
                onChange={handleChangeYear}
                value={year}
                InputProps={{ inputProps: { max: 2040, min: 1952 } }}
              />
            </div>
            <div className={styles.additionalFieldsContainer}>
              <div className={styles.additionalFieldLeft}>
                <div className={styles.selectItem}>
                  <InputBasedSelect
                    label={GameFields.RecommendedCPU}
                    labelClassName={styles.labelBaseSelect}
                    placeholder={`Input a ${GameFields.RecommendedCPU}`}
                    inputId={GameFields.RecommendedCPU}
                    options={props.state.recCPUList}
                    debounceTime={300}
                    onSelect={(id: number) => setRecCPU(id)}
                    onInputChange={createUploadMoreItems(
                      typesHardware.cpu,
                      typesField.rec,
                      GameFormActions.UPLOAD_MORE_ENTERED_REC_CPU_VALUES
                    )}
                    onSeeMoreClick={createUploadMoreItems(
                      typesHardware.cpu,
                      typesField.rec,
                      GameFormActions.UPLOAD_MORE_REC_CPU_VALUES
                    )}
                  />
                </div>
                <div className={styles.selectItem}>
                  <InputBasedSelect
                    label={GameFields.RecommendedGPU}
                    labelClassName={styles.labelBaseSelect}
                    placeholder={`Input a ${GameFields.RecommendedGPU}`}
                    inputId={GameFields.RecommendedGPU}
                    options={props.state.recGPUList}
                    debounceTime={300}
                    onSelect={(id: number) => setRecGPU(id)}
                    onInputChange={createUploadMoreItems(
                      typesHardware.gpu,
                      typesField.rec,
                      GameFormActions.UPLOAD_MORE_ENTERED_REC_GPU_VALUES
                    )}
                    onSeeMoreClick={createUploadMoreItems(
                      typesHardware.gpu,
                      typesField.rec,
                      GameFormActions.UPLOAD_MORE_REC_GPU_VALUES
                    )}
                  />
                </div>
                <div className={styles.inputItem}>
                  <InputForm
                    name={GameFields.RecommendedRamSize}
                    inputLabel={GameFields.RecommendedRamSize}
                    type="number"
                    placeholder={`Input a ${GameFields.RecommendedRamSize}`}
                    onChange={handleChangeRecRAMSize}
                    value={recRamSize || ''}
                    required
                    InputProps={{ inputProps: { max: 32, min: 2, step: 2 } }}
                  />
                </div>
              </div>
              <div className={styles.additionalFieldRight}>
                <div className={styles.selectItem}>
                  <InputBasedSelect
                    label={GameFields.MinimalCPU}
                    labelClassName={styles.labelBaseSelect}
                    placeholder={`Input a ${GameFields.MinimalCPU}`}
                    inputId={GameFields.MinimalCPU}
                    options={props.state.minCPUList}
                    debounceTime={300}
                    onSelect={(id: number) => setMinCPU(id)}
                    onInputChange={createUploadMoreItems(
                      typesHardware.cpu,
                      typesField.min,
                      GameFormActions.UPLOAD_MORE_ENTERED_MIN_CPU_VALUES
                    )}
                    onSeeMoreClick={createUploadMoreItems(
                      typesHardware.cpu,
                      typesField.min,
                      GameFormActions.UPLOAD_MORE_MIN_CPU_VALUES
                    )}
                  />
                </div>
                <div className={styles.selectItem}>
                  <InputBasedSelect
                    label={GameFields.MinimalGPU}
                    labelClassName={styles.labelBaseSelect}
                    placeholder={`Input a ${GameFields.MinimalGPU}`}
                    inputId={GameFields.MinimalGPU}
                    options={props.state.minGPUList}
                    debounceTime={300}
                    onSelect={(id: number) => setMinGPU(id)}
                    onInputChange={createUploadMoreItems(
                      typesHardware.gpu,
                      typesField.min,
                      GameFormActions.UPLOAD_MORE_ENTERED_MIN_GPU_VALUES
                    )}
                    onSeeMoreClick={createUploadMoreItems(
                      typesHardware.gpu,
                      typesField.min,
                      GameFormActions.UPLOAD_MORE_MIN_GPU_VALUES
                    )}
                  />
                </div>
                <div className={styles.inputItem}>
                  <InputForm
                    name={GameFields.MinimalRamSize}
                    inputLabel={GameFields.MinimalRamSize}
                    type="number"
                    placeholder={`Input a ${GameFields.MinimalRamSize}`}
                    onChange={handleChangeMinRAMSize}
                    value={minRamSize || ''}
                    required
                    InputProps={{ inputProps: { max: 32, min: 2, step: 2 } }}
                  />
                </div>
              </div>
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
  state: state.gameForm,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddGameForm);
