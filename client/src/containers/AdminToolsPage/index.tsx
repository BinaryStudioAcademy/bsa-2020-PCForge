import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PageComponent from 'containers/PageComponent';
import ListItem from '@material-ui/core/ListItem';
import { MenuItems } from 'common/enums';
import Title from 'components/Title';
import { TotalInfoCard, ITotalInfoCard, ICard } from 'components/TotalInfoCard';
import RequestContaner from './RequestContainer';
import { CardsName } from 'common/enums/AdminTools/CardsName';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import { ReactComponent as HardwareIcon } from 'assets/icons/hardware.svg';
import { ReactComponent as SetupIcon } from 'assets/icons/setup.svg';
import { Routes } from 'common/enums';

import { connect, ConnectedProps } from 'react-redux';
import { UserRequestedType } from 'common/enums/UserRequestedType';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { IUserRequestFilter } from 'api/services/addUserRequestService';
//import { getUsersRequests } from './actions';

import styles from './styles.module.scss';
import { TypeUsersRequests } from 'common/models/typeUsersRequests';

const AdminToolsPage = ({ history }: RouteComponentProps): JSX.Element => {
  //const AdminToolsPage: React.FC<Props> = ({userRequests=[], filteredCount, totalCount, getUsersRequests}): JSX.Element => {
  //const dispatch = useDispatch();
  //const [filter, setState] = useState<IUserRequestFilter>({});
  //let filter: IUserRequestFilter = { requestedType: UserRequestedType.game };
  //let filterGame: IUserRequestFilter = { requestedType: UserRequestedType.game };
  //let filterHardware: IUserRequestFilter = { requestedType: UserRequestedType.cpu };
  //const arr: IUserRequestFilter[] = [filterGame, filterHardware];
  /* useEffect(() => {
    getUsersRequests(filter);
  }, []);*/

  const cardsList: Array<ICard> = [
    {
      name: CardsName.Users,
      icon: <PeopleIcon style={{ color: 'white' }} />,
    },
    {
      name: CardsName.Hardwares,
      icon: <HardwareIcon />,
      onAdd: () => history.push(`${Routes.ADDITEM}/hardwares`),
      filter: { requestedType: UserRequestedType.cpu },
    },
    {
      name: CardsName.Setups,
      icon: <SetupIcon />,
    },
    {
      name: CardsName.Games,
      icon: <SportsEsportsOutlinedIcon style={{ color: 'white' }} />,
      onAdd: () => history.push(`${Routes.ADDITEM}/games`),
      filter: { requestedType: UserRequestedType.game },
    },
  ];
  return (
    <PageComponent selectedMenuItemNumber={MenuItems.AdminTools}>
      <div className={styles.contentPage}>
        <div className={styles.pageHeader}>
          <Title title="Admin tools" subtitle="Manage hardware and game content, get site statistic" />
        </div>
        <div className={styles.contentMain}>
          <div className={styles.totalBlockContainer}>
            {cardsList.map((item: ICard, key) => (
              <ListItem key={`${key}-total-info-card`} className={styles.cardListItem}>
                {<TotalInfoCard name={item.name} icon={item.icon} onAdd={item.onAdd} filter={item.filter} />}
              </ListItem>
            ))}
          </div>
          <div className={styles.chartContainer}></div> {/*TO DO*/}
          <div className={styles.notificationsContainer}>
            <RequestContaner />
          </div>
        </div>
      </div>
    </PageComponent>
  );
};
export default AdminToolsPage;
/*const mapStateToProps = (state: RootState) => {
  return {
    userRequests: state.userRequests.userRequests,
  };
};

const mapDispatch = getUsersRequests;
export default connect(mapStateToProps, mapDispatch)(AdminToolsPage);
*/
