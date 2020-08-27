import React, { useEffect, useState } from 'react';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import { HardwareTypes } from 'common/enums/AdminTools/HardwareTypes';
import Modal from 'components/BasicComponents/Modal';
import Spinner from 'components/Spinner';
import styles from './styles.module.scss';
import InputForm from 'components/BasicComponents/InputForm';
import Select from 'components/BasicComponents/Select';
import Alert, { AlertType } from 'components/BasicComponents/Alert';
import { UserRequestedType, UserRequestedHardwareType } from 'common/enums/UserRequestedType';
import { TypeUsersRequests, TypeUsersRequestsCreationAttributes } from 'common/models/typeUsersRequests';
import { IUserRequestFilter } from 'api/services/addUserRequestService';

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'redux/rootReducer';
import * as actions from './actions';
import { AddRequestState, AddRequestActions } from './actionType';
import { getUsersRequests } from 'containers/AdminToolsPage/actions';

interface IPropsDisplayModel {
  //displayInfo: TypeUsersRequests;
  onClose: () => void;
  state: AddRequestState;
  requestType: UserRequestedType;
  getUsersRequests: (filters: IUserRequestFilter) => AddRequestActions;
  //getUsersRequests: () => AddRequestActions;
  sendDataToAdmin: (userRequest: TypeUsersRequestsCreationAttributes) => AddRequestActions;
}

const HardwareTypesValues = [
  { value: 'powerSupply', title: HardwareTypes.PowerSupply },
  { value: 'motherboard', title: HardwareTypes.Motherboard },
  { value: 'ram', title: HardwareTypes.RAM },
  { value: 'cpu', title: HardwareTypes.CPU },
  { value: 'gpu', title: HardwareTypes.GPU },
  { value: 'hdd', title: HardwareTypes.HDD },
  { value: 'ssd', title: HardwareTypes.SSD },
];

const ModalAddRequest = (props: IPropsDisplayModel): JSX.Element => {
  const { requestType, getUsersRequests, sendDataToAdmin, onClose } = props; //displayInfo,

  const [description, setDescription] = useState('');
  const [typeHardWare, setTypeHardWare] = useState<string | unknown>();
  const [alertText, setAlertText] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<AlertType>();
  const handleChangeDecription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const handleChangeType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTypeHardWare(event.target.value as string);
  };
  const filter: IUserRequestFilter = { requestedType: requestType };

  useEffect(() => {
    getUsersRequests(filter);
  }, []);
  const onSend = () => {
    const requestData: TypeUsersRequestsCreationAttributes = {
      requestBody: description,
      requestType: requestType,
      requestedHardwareType: typeHardWare as string,
      userId: 20, // get from token
    };
    console.log(requestData);
    sendDataToAdmin(requestData);
  };
  const isCheckedRequestCount = (): boolean => {
    return true;
  };
  console.log(props.state);

  /*const hardwareTitle =
    displayInfo.requestedType === UserRequestedType.hardware ? `(New ${displayInfo.requestedHardwareType})` : '';*/

  return (
    <Modal open={true}>
      {/* {props.state.loadingStatus ? ( */}
      <>
        {alertText ? (
          <Alert alertType={alertType}>{alertText}</Alert>
        ) : (
          <div>
            <div className={styles.requestTitle}>{`New ${requestType} request to admin`}</div>
            {requestType === UserRequestedType.hardware ? (
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
            ) : null}
            <div className={styles.requestTitle}>{'Request message: '}</div>
            <div className={styles.inputItem}>
              <InputForm
                name="description"
                inputLabel="Description"
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
              <Button buttonType={ButtonType.primary} className={styles.buttonOk} onClick={onSend}>
                Send request
              </Button>
              <Button buttonType={ButtonType.secondary} className={styles.buttonOk} onClick={onClose}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </>
      {/* ) : (
        <Spinner />
      )} */}
    </Modal>
  );
};

const mapStateToProps = (state: RootState) => ({
  state: state.addRequestReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddRequest);
