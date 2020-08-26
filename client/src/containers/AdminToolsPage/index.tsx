import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PageComponent from 'containers/PageComponent';
import ListItem from '@material-ui/core/ListItem';
import Spinner from 'components/Spinner';
import { MenuItems } from 'common/enums';
import Title from 'components/Title';
import { TotalInfoCard, ITotalInfoCard } from 'containers/AdminToolsPage/TotalInfoCard';
import RequestContaner from './RequestContainer';
import { CardsName } from 'common/enums/AdminTools/CardsName';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import { ReactComponent as HardwareIcon } from 'assets/icons/hardware.svg';
import { ReactComponent as SetupIcon } from 'assets/icons/setup.svg';
import { Routes } from 'common/enums';
import { History } from 'history';
import Alert, { AlertType } from 'components/BasicComponents/Alert';

import { UserRequestedType } from 'common/enums/UserRequestedType';
import { IUserRequestFilter } from 'api/services/addUserRequestService';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'redux/rootReducer';
import * as actions from './actions';
import { UsersRequestState, UsersRequestActions } from './actionsTypes';

import styles from './styles.module.scss';

interface IPropsAdminToolsPage {
  state: UsersRequestState;
  historyPage: History;
  getUsersRequests: (filters: IUserRequestFilter[]) => UsersRequestActions;
  deleteUserRequest: (id: number) => UsersRequestActions;
  getTotalCounts: () => UsersRequestActions;
}

const AdminToolsPage = (props: IPropsAdminToolsPage): JSX.Element => {
  const { getUsersRequests, deleteUserRequest, getTotalCounts } = props;
  const [alertText, setAlertText] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<AlertType>();

  useEffect(() => {
    getUsersRequests([{}, { requestedType: UserRequestedType.game }, { requestedType: UserRequestedType.cpu }]);
    getTotalCounts();
  }, []);

  const cardsList: Array<ITotalInfoCard> = [
    {
      name: CardsName.Users,
      count: props.state.countUsers,
      icon: <PeopleIcon style={{ color: 'white' }} />,
    },
    {
      name: CardsName.Hardwares,
      count: props.state.countHardWares,
      icon: <HardwareIcon />,
      countOfRequests: props.state.countHardwaresRequests,
      onAdd: () => props.historyPage.push(`${Routes.ADDITEM}/hardwares`),
    },
    {
      name: CardsName.Setups,
      count: props.state.countSetups,
      icon: <SetupIcon />,
    },
    {
      name: CardsName.Games,
      count: props.state.countGames,
      icon: <SportsEsportsOutlinedIcon style={{ color: 'white' }} />,
      countOfRequests: props.state.countGamesRequests,
      onAdd: () => props.historyPage.push(`${Routes.ADDITEM}/games`),
    },
  ];

  if (props.state.error && !alertText) {
    setAlertText(props.state.error);
    setAlertType(AlertType.error);
  }

  return (
    <PageComponent selectedMenuItemNumber={MenuItems.AdminTools}>
      <div className={styles.contentPage}>
        <div className={styles.pageHeader}>
          <Title title="Admin tools" subtitle="Manage hardware and game content, get site statistic" />
        </div>
        <div className={styles.contentMain}>
          <div className={styles.totalBlockContainer}>
            {alertText ? <Alert alertType={alertType}>{alertText}</Alert> : null}
            {props.state.dataTotalsIsLoaded ? (
              <>
                {cardsList.map((item: ITotalInfoCard, key) => (
                  <ListItem key={`${key}-total-info-card`} className={styles.cardListItem}>
                    {
                      <TotalInfoCard
                        name={item.name}
                        count={item.count}
                        icon={item.icon}
                        countOfRequests={item.countOfRequests}
                        onAdd={item.onAdd}
                      />
                    }
                  </ListItem>
                ))}
              </>
            ) : (
              <Spinner />
            )}
          </div>
          <div className={styles.chartContainer}></div> {/*TO DO*/}
          <div className={styles.notificationsContainer}>
            {props.state.dataUserRequestsIsLoaded ? (
              <RequestContaner usersRequests={props.state.userRequests} deleteUserRequest={deleteUserRequest} />
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </PageComponent>
  );
};

const mapStateToProps = (state: RootState, routeComponentValue: RouteComponentProps) => ({
  state: state.userRequests,
  historyPage: routeComponentValue.history,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdminToolsPage);
