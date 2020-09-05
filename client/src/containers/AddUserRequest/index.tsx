import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'redux/rootReducer';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Button, { ButtonType } from 'components/BasicComponents/Button';
import Modal from 'components/BasicComponents/Modal';
import Spinner from 'components/Spinner';
import InputForm from 'components/BasicComponents/InputForm';
import Select from 'components/BasicComponents/Select';
import Alert, { AlertType } from 'components/BasicComponents/Alert';

import { HardwareTypes } from 'common/enums/AdminTools/HardwareTypes';
import { UserRequestedType } from 'common/enums/UserRequestedType';
import { MAX_COUNT_USERS_REQUESTS } from 'common/constants/index';

import { User } from 'common/models/user';
import { TypeUsersRequestsCreationAttributes } from 'common/models/typeUsersRequests';
import { IUserRequestFilter } from 'api/services/addUserRequestService';
import * as notification from 'common/services/NotificationService/notification.service';

import * as actions from './actions';
import { AddRequestState, AddRequestActions } from './actionType';

import styles from './styles.module.scss';

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

interface IPropsDisplayModel {
  onClose: () => void;
  state: AddRequestState;
  requestType: UserRequestedType;
  getCountUsersRequests: (filters: IUserRequestFilter) => AddRequestActions;
  sendDataToAdmin: (userRequest: TypeUsersRequestsCreationAttributes) => AddRequestActions;
  clearStateValues: () => AddRequestActions;
  currentUser: User | null;
}

const storage = 'Storage';
const validationErrorText = 'Please define required fields of request';
const HardwareTypesValues = [
  { value: 'powerSupply', title: HardwareTypes.PowerSupply },
  { value: 'motherboard', title: HardwareTypes.Motherboard },
  { value: 'ram', title: HardwareTypes.RAM },
  { value: 'cpu', title: HardwareTypes.CPU },
  { value: 'gpu', title: HardwareTypes.GPU },
  { value: storage, title: storage },
];
const StorageTypesValues = [
  { value: 'hdd', title: HardwareTypes.HDD },
  { value: 'ssd', title: HardwareTypes.SSD },
];

const ModalAddRequest = (props: IPropsDisplayModel): JSX.Element => {
  const { requestType, getCountUsersRequests, sendDataToAdmin, clearStateValues, onClose, currentUser } = props;

  const [description, setDescription] = useState('');
  const [typeHardWare, setTypeHardWare] = useState<string | unknown>();
  const [typeStorage, setTypeStorage] = useState<string | unknown>();
  const [alertText, setAlertText] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<AlertType | undefined>();
  const [validationError, setValidationError] = useState<string>('');
  const [disableSendButton, setDisableSendButton] = useState<boolean>();
  const handleChangeDecription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const handleChangeType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTypeHardWare(event.target.value as string);
  };
  const handleChangeStorageType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTypeStorage(event.target.value as string);
  };

  const currentUserId = currentUser?.id;
  const filter: IUserRequestFilter = { requestedType: requestType, userId: currentUserId };

  useEffect(() => {
    getCountUsersRequests(filter);
  }, []);

  const onSend = () => {
    //validate entered data
    if (!description) {
      setValidationError(validationErrorText);
      return;
    }
    let requestData: TypeUsersRequestsCreationAttributes;
    if (requestType === UserRequestedType.game) {
      setValidationError('');
      requestData = {
        requestBody: description,
        requestedType: requestType,
      };
    } else {
      if (!typeHardWare || (typeHardWare === storage && !typeStorage)) {
        setValidationError(validationErrorText);
        return;
      }
      setValidationError('');
      const requestedHardWare = typeHardWare === storage ? typeStorage : typeHardWare;
      requestData = {
        requestBody: description,
        requestedType: requestType,
        requestedHardwareType: requestedHardWare as string,
      };
    }
    sendDataToAdmin(requestData);
  };
  const CloseModalWindow = () => {
    clearStateValues();
    onClose();
  };

  if (props.state.sendingStatus) {
    clearStateValues();
    onClose();
    notification.success(`Your request is sent to admin`);
  }
  if (props.state.countAlreadySentRequests >= MAX_COUNT_USERS_REQUESTS && !disableSendButton) {
    setDisableSendButton(true);
    setAlertText(`The allowed limit of requests (${MAX_COUNT_USERS_REQUESTS} active requests) has been exceeded`);
    setAlertType(AlertType.info);
  } else if (props.state.errorMessage && !alertText) {
    setAlertText(props.state.errorMessage);
    setAlertType(AlertType.error);
  } else if (validationError && !alertText) {
    setAlertText(validationError);
    setAlertType(AlertType.error);
    setValidationError('');
  }

  return (
    <Modal open={true}>
      {props.state.loadingStatus ? (
        <>
          {alertText ? <Alert alertType={alertType}>{alertText}</Alert> : null}
          <ThemeProvider theme={theme}>
            <div className={styles.requestTitle}>{`New ${requestType} request to admin`}</div>
            {requestType === UserRequestedType.hardware ? (
              <>
                <div className={styles.selectItem}>
                  <Select
                    inputLabel="Hardware's type"
                    placeholder="Select a type of hardware"
                    value={typeHardWare}
                    onChange={handleChangeType}
                    inputOptions={HardwareTypesValues}
                    labelClassName={styles.selectItemHeader}
                    required
                  />
                </div>
                <>
                  {typeHardWare === storage ? (
                    <div className={styles.selectItem}>
                      <Select
                        inputLabel="Storage's type"
                        placeholder="Select a type of storage"
                        value={typeStorage}
                        onChange={handleChangeStorageType}
                        inputOptions={StorageTypesValues}
                        labelClassName={styles.selectItemHeader}
                        required
                      />
                    </div>
                  ) : null}
                </>
              </>
            ) : null}
            <div className={styles.inputItem}>
              <InputForm
                name="description"
                inputLabel="Request message"
                type="text"
                placeholder={`Input a text description`}
                onChange={handleChangeDecription}
                value={description}
                multiline
                rowsMax={8}
                rows={4}
              />
            </div>
            <div className={styles.buttonContainer}>
              <>
                {disableSendButton ? (
                  <Button
                    buttonType={ButtonType.primary}
                    className={`${styles.buttonOk} ${styles.buttonDisabled}`}
                    disabled
                  >
                    Send request
                  </Button>
                ) : (
                  <Button buttonType={ButtonType.primary} className={styles.buttonOk} onClick={onSend}>
                    Send request
                  </Button>
                )}
                <Button buttonType={ButtonType.secondary} className={styles.buttonOk} onClick={CloseModalWindow}>
                  Cancel
                </Button>
              </>
            </div>
          </ThemeProvider>
        </>
      ) : (
        <Spinner />
      )}
    </Modal>
  );
};

const mapStateToProps = (state: RootState) => ({
  state: state.addRequest,
  currentUser: state.auth.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddRequest);
