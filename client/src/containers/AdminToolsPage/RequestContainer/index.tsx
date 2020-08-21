import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { HardwareTypes } from 'common/enums/AdminTools/HardwareTypes';
import ListItem from '@material-ui/core/ListItem';
import Spinner from 'components/Spinner';
import { getAllUsersRequsts, IUserRequestFilter, deleteUserRequest } from 'api/services/addUserRequestService';
import { UserRequestedType } from 'common/enums/UserRequestedType';

import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState } from 'redux/rootReducer';
import * as actions from './actions';
import { UsersRequestState, UsersRequestActions } from './actionsTypes';
import { TypeUsersRequests } from 'common/models/typeUsersRequests';
import RenderRequestItem from './RenderRequestItem';

interface IPropsRequestContainer {
  state: UsersRequestState;
  getUsersRequests: (filter: IUserRequestFilter) => UsersRequestActions;
  deleteUserRequest: (id: number) => UsersRequestActions;
}

const RequestContaner = (props: IPropsRequestContainer): JSX.Element => {
  const { getUsersRequests, deleteUserRequest } = props;

  useEffect(() => {
    getUsersRequests({});
  }, []);

  const onDisapprove = (id: number, userEmail: string, userId: number) => {
    // send notification about disapprove to user
    console.log(`send notification about disapproving to user with id ${userId}`);
    deleteUserRequest(id);
  };
  const onApprove = (id: number, userEmail: string, userId: number) => {
    // send notification about approve to user
    console.log(`send notification about approving to user with id ${userId}`);
    deleteUserRequest(id);
  };
  console.log(props.state);

  return (
    <div>
      <h2 className={styles.requestHeader}>Recent Requests</h2>
      {props.state.dataIsLoaded ? (
        <div className={styles.requestContaner}>
         {props.state.userRequests.map((item: TypeUsersRequests, key) => (
           <ListItem key={`${item.id}-request-item`} className={styles.listItem}>
             <RenderRequestItem item={item} username={'Bill Gates'} onDisaproveHandler={onDisapprove} onApproveHandler={onApprove}/>
           </ListItem>
         ))}
       </div>
      ) : <Spinner/>}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  state: state.userRequests,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RequestContaner);
