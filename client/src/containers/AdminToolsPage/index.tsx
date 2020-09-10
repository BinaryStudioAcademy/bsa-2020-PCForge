import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { History } from 'history';

import { MenuItems } from 'common/enums';
import { CardsName } from 'common/enums/AdminTools/CardsName';

import { RootState } from 'redux/rootReducer';
import PageComponent from 'containers/PageComponent';
import ListItem from '@material-ui/core/ListItem';

import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import { ReactComponent as HardwareIcon } from 'assets/icons/hardware.svg';
import { ReactComponent as SetupIcon } from 'assets/icons/setup.svg';

import Spinner from 'components/Spinner';
import Title from 'components/Title';
import { TotalInfoCard, ITotalInfoCard } from 'containers/AdminToolsPage/TotalInfoCard';
import RequestContainer from './RequestContainer';

import { Routes } from 'common/enums';
import { UserRequestedType } from 'common/enums/UserRequestedType';
import { IUserRequestFilter } from 'api/services/addUserRequestService';

import * as actions from './actions';
import { UsersRequestState, UsersRequestActions } from './actionsTypes';
import { UserRequestDeleteType } from 'containers/AdminToolsPage/actionsTypes';

import styles from './styles.module.scss';
import { Box } from '@material-ui/core';

interface IPropsAdminToolsPage {
  state: UsersRequestState;
  historyPage: History;
  getUsersRequests: (filters: IUserRequestFilter[]) => UsersRequestActions;
  deleteUserRequest: (id: number, type: UserRequestDeleteType) => UsersRequestActions;
  getTotalCounts: () => UsersRequestActions;
}

const AdminToolsPage = (props: IPropsAdminToolsPage): JSX.Element => {
  const { getUsersRequests, deleteUserRequest, getTotalCounts } = props;

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
      count: 0,
      icon: <SportsEsportsOutlinedIcon style={{ color: 'white' }} />,
      onAdd: () => alert('To do News form'),
    },
  ];

  return (
    <PageComponent selectedMenuItemNumber={MenuItems.AdminTools}>
      <div className={styles.contentPage}>
        <div className={styles.pageHeader}>
          <Title title="Admin Tools" subtitle="Manage hardware and game content, get site statistic" />
        </div>
        {props.state.dataTotalsIsLoaded ? (
          <div className={styles.contentMain}>
            <div className={styles.totalBlockContainer}>
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
