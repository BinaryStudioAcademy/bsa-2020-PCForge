import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PageComponent from 'containers/PageComponent';
import ListItem from '@material-ui/core/ListItem';
import Spinner from 'components/Spinner';
import { MenuItems } from 'common/enums';
import Title from 'components/Title';
import { TotalInfoCard, ITotalInfoCard } from 'containers/AdminToolsPage/TotalInfoCard';
import RequestContainer from './RequestContainer';
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
import { Box } from '@material-ui/core';

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
    getUsersRequests([{}, { requestedType: UserRequestedType.game }, { requestedType: UserRequestedType.hardware }]);
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
    {
      name: CardsName.News,
      count: props.state.countGames,
      icon: <SportsEsportsOutlinedIcon style={{ color: 'white' }} />,
      onAdd: () => alert('To do News form'),
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
        {props.state.dataTotalsIsLoaded ? (
          <div className={styles.contentMain}>
            <div className={styles.totalBlockContainer}>
              {alertText ? <Alert alertType={alertType}>{alertText}</Alert> : null}
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
            </div>
            <div className={styles.chartContainer}>{/*TO DO*/}</div>
            <div className={styles.notificationsContainer}>
              {props.state.dataUserRequestsIsLoaded ? (
                <RequestContainer usersRequests={props.state.userRequests} deleteUserRequest={deleteUserRequest} />
              ) : (
                <Box className="spinnerWrapper">
                  <Spinner load />
                </Box>
              )}
            </div>
          </div>
        ) : (
          <Box className="spinnerWrapper">
            <Spinner load />
          </Box>
        )}
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
