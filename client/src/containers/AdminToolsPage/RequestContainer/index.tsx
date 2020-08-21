import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { HardwareTypes } from 'common/enums/AdminTools/HardwareTypes';
import ListItem from '@material-ui/core/ListItem';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import { getAllUsersRequsts, IUserRequestFilter, deleteUserRequest } from 'api/services/addUserRequestService';
import { UserRequestedType } from 'common/enums/UserRequestedType';

import { connect, ConnectedProps } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { getUsersRequests } from './actions';
import { TypeUsersRequests } from 'common/models/typeUsersRequests';

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

interface IProps {
  item: TypeUsersRequests;
  username: string;
  onDisaproveHandler: (id: number) => void;
}

//const RenderRequestItem: React.FC<TypeUsersRequests> = (item) => {
const RenderRequestItem = ({ item, username, onDisaproveHandler }: IProps): JSX.Element => {
  const date = new Date(item.createdAt);
  console.log(date);

  const onDisapprove = () => {
    onDisaproveHandler(item.id);
  };
  return (
    <div className={styles.requestItem} key={item.id}>
      <div className={styles.requestTitle}>{`New ${item.requestedType}`}</div>
      <div className={styles.requestInfo}>{item.requestBody}</div>
      <div className={styles.requestExtraInfoContainer}>
        <div className={styles.requestExtraInfoItem}>{date.toLocaleString()}</div>
        <div className={styles.requestExtraInfoItem}>{username}</div>
      </div>
      <div className={styles.buttonContainer}>
        <Button buttonType={ButtonType.secondary} className={styles.buttonRequest}>
          Details
        </Button>
        <Button buttonType={ButtonType.primary} className={styles.buttonRequest}>
          Approve
        </Button>
        <Button buttonType={ButtonType.secondary} className={styles.buttonRequest} onClick={onDisapprove}>
          Disapprove
        </Button>
      </div>
    </div>
  );
};

//const RequestContaner = (): JSX.Element => {
const RequestContaner: React.FC<Props> = ({ userRequests = [], getUsersRequests, deleteUserRequest }): JSX.Element => {
  const [requests, setRequests] = useState<Array<TypeUsersRequests>>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getUsersRequests({});
  }, []);

  const onDisapproveFunction = (id: number) => {
    dispatch(deleteUserRequest(id));
  };

  return (
    <div>
      <h2 className={styles.requestHeader}>Recent Requests</h2>
      <div className={styles.requestContaner}>
        {userRequests.map((item: TypeUsersRequests, key) => (
          <ListItem key={`${item.id}-request-item`} className={styles.listItem}>
            <RenderRequestItem item={item} username={'Bill Gates'} onDisaproveHandler={onDisapproveFunction} />
          </ListItem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    userRequests: state.userRequests.userRequests,
  };
};

const mapDispatch = {
  getUsersRequests,
  deleteUserRequest,
};
const connector = connect(mapStateToProps, mapDispatch);
type PropsRedux = ConnectedProps<typeof connector>;
type Props = PropsRedux & {
  userRequests: TypeUsersRequests[];
};

export default connector(RequestContaner);
