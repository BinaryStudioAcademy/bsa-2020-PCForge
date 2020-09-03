import React from 'react';
import styles from './styles.module.scss';
import ListItem from '@material-ui/core/ListItem';
import { TypeUsersRequests } from 'common/models/typeUsersRequests';
import RenderRequestItem from './RenderRequestItem';

interface IPropsRequestContainer {
  usersRequests: TypeUsersRequests[];
  deleteUserRequest: (id: number) => void;
}

const RequestContaner = (props: IPropsRequestContainer): JSX.Element => {
  const { usersRequests, deleteUserRequest } = props;

  const onDisapprove = (id: number, email: string) => {
    // send notification about disapprove to user
    console.log(`send notification about disapproving to user with email ${email}`);
    deleteUserRequest(id);
  };
  const onApprove = (id: number, email: string) => {
    // send notification about approve to user
    console.log(`send notification about approving to user with email ${email}`);
    deleteUserRequest(id);
  };
  return (
    <div>
      <h2 className={styles.requestHeader}>Recent Requests</h2>
      <div className={styles.requestContaner}>
        {usersRequests.length > 0 ? (
          <>
            {usersRequests.map((item: TypeUsersRequests) => (
              <ListItem key={`${item.id}-request-item`} className={styles.listItem}>
                <RenderRequestItem item={item} onDisaproveHandler={onDisapprove} onApproveHandler={onApprove} />
              </ListItem>
            ))}
          </>
        ) : (
          <div> No Requests yet</div>
        )}
      </div>
    </div>
  );
};

export default RequestContaner;
